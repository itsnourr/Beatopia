from flask import Flask
from auth import auth_blueprint
from routes import protected_blueprint
from db import db


def create_app():
    app = Flask(__name__)
    
    # Load configurations from config.py
    app.config.from_object('config.Config')
    
    # Initialize the database with the app
    db.init_app(app)
    
    # Register Blueprints
    app.register_blueprint(auth_blueprint, url_prefix='/auth')
    app.register_blueprint(protected_blueprint, url_prefix='/protected')
    
    return app


if __name__ == '__main__':
    app = create_app()
    app.run(debug=True, port=5000)