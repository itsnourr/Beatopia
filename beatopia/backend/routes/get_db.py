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
    
@protected_blueprint.route('/get_mixes', methods=['GET'])
def get_mixes():
    try:
        mixes = Mix.query.all()  # Get all mixes from the database
        mixes_data = []
        for mix in mixes:
            mix_data = {
                'id': mix.id,
                'title': mix.title,
                'beat': mix.beat.title,  # Assuming beat is an object with a title
                'sound': mix.sound.title,  # Assuming sound is an object with a title
                'audioPath': mix.file_path  # Assuming file_path stores the filename
            }
            mixes_data.append(mix_data)
        return jsonify(mixes_data)  # Send back the list of mixes with their paths
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@protected_blueprint.route('/get_recent_mixes', methods=['GET'])
def get_recent_mixes():
    try:
        # Fetch the 4 most recent mixes ordered by created_at in descending order
        mixes = Mix.query.order_by(Mix.created_at.desc()).limit(4).all()
        mixes_data = []
        
        for mix in mixes:
            mix_data = {
                'id': mix.id,
                'title': mix.title,
                'beat': mix.beat.title,  # Assuming beat is an object with a title
                'sound': mix.sound.title,  # Assuming sound is an object with a title
                'audioPath': mix.file_path  # Assuming file_path stores the filename
            }
            mixes_data.append(mix_data)
        
        return jsonify(mixes_data)  # Send back the list of mixes with their paths
    
    except Exception as e:
        return jsonify({'error': str(e)}), 500
    
def get_recent_task():
    try:
        tasks = Task.query.order_by(Task.due_at.desc()).limit(4).all()
        tasks_data = []
        
        for task in tasks:
            tasks_data = {
                'id': task.id,
                'title': task.title,
                'label':task.label,
                'status':task.status,
                'dueDate': task.due_at,  
                'done':False  
            }
            tasks_data.append(tasks_data)
        
        return jsonify(tasks_data) 
    
    except Exception as e:
        return jsonify({'error': str(e)}), 500
