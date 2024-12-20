from flask import request, jsonify
from pydub import AudioSegment
from io import BytesIO
from . import protected_blueprint
import os
import db
from models import *

# Calculate the base directory for audio files
BASE_DIR = os.path.abspath(os.path.join(os.path.dirname(__file__), '..'))  # Points to `backend`
AUDIO_FOLDER = os.path.join(BASE_DIR, 'audio')  # Points to `backend/audio`

@protected_blueprint.route('/create_mix', methods=['POST'])
def create_mix():
    try:
        # Get the beat and sound paths from the request
        beat_url = request.json.get('beatPath')
        sound_url = request.json.get('soundPath')

        if not beat_url or not sound_url:
            return jsonify({"error": "Please provide both beat and sound paths."}), 400

        # Extract file names from URLs
        beat_filename = os.path.basename(beat_url)
        sound_filename = os.path.basename(sound_url)

        # Construct file system paths (as you did earlier)
        beat_path = os.path.join(AUDIO_FOLDER, 'beats', beat_filename)
        sound_path = os.path.join(AUDIO_FOLDER, 'sounds', sound_filename)

        # Check if files exist on the filesystem
        if not os.path.exists(beat_path):
            return jsonify({"error": f"File not found: {beat_filename}"}), 404
        if not os.path.exists(sound_path):
            return jsonify({"error": f"File not found: {sound_filename}"}), 404


        # Query the Beat and Sound models by their file paths to get the ids
        beat = Beat.query.filter_by(file_path=beat_filename).first()
        sound = Sound.query.filter_by(file_path=sound_filename).first()

        if not beat:
            return jsonify({"error": f"Beat not found for file path: {beat_url}"}), 404
        if not sound:
            return jsonify({"error": f"Sound not found for file path: {sound_url}"}), 404

        # Now you have the beat and sound objects, and their ids are available
        beat_id = beat.id
        sound_id = sound.id

        # Create a new mix record in the database
        new_mix = Mix(
            title="My Mix",  # You can modify this to generate a unique title
            beat_id=beat_id,
            sound_id=sound_id,
            user_id=1  # You should get the user_id from the current session or authentication
        )
        db.session.add(new_mix)
        db.session.commit()

        # Return a success response
        return jsonify({"message": "Mix created successfully"}), 201

    except Exception as e:
        return jsonify({"error": str(e)}), 500