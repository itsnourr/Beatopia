from flask import Flask,request, send_from_directory
from auth import auth_blueprint
from routes import protected_blueprint
from db import db,migrate
from flask_cors import CORS
from flask_session import Session
from utils.scheduler import init_scheduler
import os

def create_app():
    app = Flask(__name__)

    # Load configurations from config.py
    app.config.from_object('config.Config')
    
    # Initialize the database with the app
    db.init_app(app)
    migrate.init_app(app, db)
    Session(app)
    CORS(app, supports_credentials=True, origins="http://localhost:3000", resources={r"/*": {"allow_headers": "Content-Type", "allow_methods": "GET,POST,OPTIONS"}})

    @app.after_request
    def after_request(response):
        response.headers['Access-Control-Allow-Origin'] = 'http://localhost:3000'
        response.headers['Access-Control-Allow-Credentials'] = 'true'
        response.headers['Access-Control-Allow-Headers'] = 'Content-Type,Authorization'
        response.headers['Access-Control-Allow-Methods'] = 'GET, POST, OPTIONS, PUT, DELETE'

        if request.method == 'OPTIONS':
            response.status_code = 200
            return response
        
        return response

    # Register Blueprints
    app.register_blueprint(auth_blueprint, url_prefix='/')
    app.register_blueprint(protected_blueprint, url_prefix='/api')
    
    
    return app


app = create_app()

BEATS_DIRECTORY = os.path.join(os.path.dirname(__file__), 'audio', 'beats')
SOUNDS_DIRECTORY = os.path.join(os.path.dirname(__file__), 'audio', 'sounds')

@app.route('/audio/beat/<filename>')
def serve_beat(filename):
    """Serve beat audio files"""
    return send_from_directory(BEATS_DIRECTORY, filename)

@app.route('/audio/sound/<filename>')
def serve_sound(filename):
    """Serve sound audio files"""
    return send_from_directory(SOUNDS_DIRECTORY, filename)

if __name__ == '__main__':
    scheduler = init_scheduler(app)
    app.run(debug=True, port=5000,ssl_context=('cert.pem', 'key.pem'))