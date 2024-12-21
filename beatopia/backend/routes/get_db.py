from flask import jsonify
from . import protected_blueprint
from db import db
from models import Beat, Sound  # Adjust import paths as needed
from models import Mix
from models import Task

@protected_blueprint.route('/beats', methods=['GET'])
def get_beats():
    try:
        beats = Beat.query.all()
        beats_data = [
            {
                "id": beat.id,
                "title": beat.title,
                "label": beat.description,
                "audioPath": beat.file_path
            }
            for beat in beats
        ]
        return jsonify(beats_data), 200
    except Exception as e:
        return jsonify({"error": str(e)}), 500

@protected_blueprint.route('/sounds', methods=['GET'])
def get_sounds():
    try:
        sounds = Sound.query.all()
        sounds_data = [
            {
                "id": sound.id,
                "title": sound.title,
                "label": sound.description,
                "audioPath": sound.file_path
            }
            for sound in sounds
        ]
        return jsonify(sounds_data), 200
    except Exception as e:
        return jsonify({"error": str(e)}), 500
    
from flask import session, jsonify

@protected_blueprint.route('/get_mixes', methods=['GET'])
def get_mixes():
    try:
        # Retrieve the current user's ID from the session
        user_id = session.get('user_id')

        if not user_id:
            return jsonify({'error': 'User not authenticated'}), 401

        # Fetch mixes for the current user
        mixes = Mix.query.filter_by(user_id=user_id).all()
        mixes_data = []

        for mix in mixes:
            mix_data = {
                'id': mix.id,
                'title': mix.title,
                'beat': mix.beat.title,
                'sound': mix.sound.title,
                'audioPath': mix.file_path
            }
            mixes_data.append(mix_data)

        return jsonify(mixes_data)
    
    except Exception as e:
        return jsonify({'error': str(e)}), 500


@protected_blueprint.route('/get_recent_mixes', methods=['GET'])
def get_recent_mixes():
    try:
        # Retrieve the current user's ID from the session
        user_id = session.get('user_id')

        if not user_id:
            return jsonify({'error': 'User not authenticated'}), 401

        # Fetch the most recent mixes for the current user
        mixes = Mix.query.filter_by(user_id=user_id).order_by(Mix.created_at.desc()).limit(4).all()
        mixes_data = []

        for mix in mixes:
            mix_data = {
                'id': mix.id,
                'title': mix.title,
                'beat': mix.beat.title,
                'sound': mix.sound.title,
                'audioPath': mix.file_path
            }
            mixes_data.append(mix_data)

        return jsonify(mixes_data)
    
    except Exception as e:
        return jsonify({'error': str(e)}), 500

    
@protected_blueprint.route('/get_recent_tasks', methods=['GET'])
def get_recent_tasks():
    try:
        # Retrieve the current user's ID from the session
        user_id = session.get('user_id')

        if not user_id:
            return jsonify({'error': 'User not authenticated'}), 401

        # Fetch the most recent tasks for the current user
        tasks = Task.query.filter_by(user_id=user_id).order_by(Task.due_at.desc()).limit(4).all()
        tasks_data = []

        for task in tasks:
            task_data = {
                'id': task.id,
                'title': task.title,
                'label': task.label,
                'status': task.status,
                'dueDate': task.due_at,
                'done': False
            }
            tasks_data.append(task_data)

        return jsonify(tasks_data)
    
    except Exception as e:
        return jsonify({'error': str(e)}), 500

