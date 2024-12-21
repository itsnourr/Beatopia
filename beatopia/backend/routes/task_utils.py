from flask import request, jsonify
from . import protected_blueprint
import db
from models import *


@protected_blueprint.route('/load_tasks', methods=['GET'])
def load_tasks():
    tasks = Task.query.all()
    return jsonify([task.to_dict() for task in tasks]), 200

@protected_blueprint.route('/add_tasks', methods=['POST'])
def add_task():
    data = request.json
    title = data.get('title')
    status = data.get('status', 'to-do')

    if not title:
        return jsonify({'error': 'Title and user_id are required'}), 400

    new_task = Task(title=title, status=status)
    db.session.add(new_task)
    db.session.commit()

    return jsonify(new_task.to_dict()), 201

@protected_blueprint.route('/delete_tasks/<int:id>', methods=['DELETE'])
def delete_task(id):
    task = Task.query.get(id)
    if not task:
        return jsonify({'error': 'Task not found'}), 404

    db.session.delete(task)
    db.session.commit()
    return jsonify({'message': 'Task deleted successfully'}), 200

@protected_blueprint.route('/update_tasks/<int:id>', methods=['PUT'])
def update_task_status(id):
    task = Task.query.get(id)
    if not task:
        return jsonify({'error': 'Task not found'}), 404

    data = request.json
    new_status = data.get('status')

    if new_status not in ['to-do', 'doing', 'done']:
        return jsonify({'error': 'Invalid status value'}), 400

    task.status = new_status
    db.session.commit()

    return jsonify(task.to_dict()), 200