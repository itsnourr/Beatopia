from flask import request, jsonify, send_file, current_app
from pydub import AudioSegment
from pydub.playback import play
from io import BytesIO
from . import protected_blueprint
import os

# Set the base directory for audio files
BASE_AUDIO_DIR = os.path.join(os.path.dirname(__file__), 'audio')

# Access beats or sounds
BEAT_DIR = os.path.join(BASE_AUDIO_DIR, 'beats')
SOUND_DIR = os.path.join(BASE_AUDIO_DIR, 'sounds')


AUDIO_FOLDER = os.path.join(os.path.dirname(__file__), 'audio')


@protected_blueprint.route('/create_mix', methods=['POST'])
def create_mix():
    try:
        beat_filename = request.json.get('beatPath')
        sound_filename = request.json.get('soundPath')

        if not beat_filename or not sound_filename:
            return jsonify({"error": "Please provide both beat and sound paths."}), 400

        beat_path = os.path.join(AUDIO_FOLDER, beat_filename.lstrip('/'))  # Remove leading slash if present
        sound_path = os.path.join(AUDIO_FOLDER, sound_filename.lstrip('/'))


        if not os.path.exists(beat_path):
            return jsonify({"error": f"File not found: {beat_filename}"}), 404
        if not os.path.exists(sound_path):
            return jsonify({"error": f"File not found: {sound_filename}"}), 404

        # Load the audio files
        beat = AudioSegment.from_file(beat_path , format="wav")
        sound = AudioSegment.from_file(sound_path , format="wav")

        # Overlay sound on beat
        mixed_audio = beat.overlay(sound)

        # Save the mixed audio to a BytesIO buffer
        buffer = BytesIO()
        mixed_audio.export(buffer, format="mp3")
        buffer.seek(0)

        return send_file(buffer, as_attachment=True, download_name="mixed_audio.mp3", mimetype="audio/mpeg")
        

    except Exception as e:
        return jsonify({"error": str(e)}), 500