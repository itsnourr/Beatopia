from flask import Flask
from auth import auth_blueprint
from routes import protected_blueprint
from db import db,migrate
from flask_cors import CORS
from flask_session import Session
from utils.scheduler import init_scheduler

def create_app():
    app = Flask(__name__)

    # Load configurations from config.py
    app.config.from_object('config.Config')
    
    # Initialize the database with the app
    db.init_app(app)
    migrate.init_app(app, db)
    Session(app)

    CORS(app, supports_credentials=True, origins="http://localhost:3000", resources={r"/*": {"allow_headers": "Content-Type"}})

    @app.after_request
    def after_request(response):
        response.headers['Access-Control-Allow-Origin'] = 'http://localhost:3000'
        response.headers['Access-Control-Allow-Credentials'] = 'true'
        response.headers['Access-Control-Allow-Headers'] = 'Content-Type'
        return response

    # Register Blueprints
    app.register_blueprint(auth_blueprint, url_prefix='/')
    app.register_blueprint(protected_blueprint, url_prefix='/protected')
    
    
    return app




if __name__ == '__main__':
    app = create_app()
    scheduler = init_scheduler(app)
    app.run(debug=True, port=5000,ssl_context=('cert.pem', 'key.pem'))