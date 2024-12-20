from flask import jsonify
from . import protected_blueprint
from db import db
from models import Beat, Sound  # Adjust import paths as needed

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
