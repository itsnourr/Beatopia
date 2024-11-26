from flask import Flask
from auth import auth_blueprint
from routes import protected_blueprint
from db import db,migrate
from flask_cors import CORS
from flask_jwt_extended import JWTManager



def create_app():
    app = Flask(__name__)

    # Load configurations from config.py
    app.config.from_object('config.Config')
    jwt = JWTManager(app)

    # Initialize the database with the app
    db.init_app(app)
    migrate.init_app(app, db)

    CORS(app)

    # Register Blueprints
    app.register_blueprint(auth_blueprint, url_prefix='/')
    app.register_blueprint(protected_blueprint, url_prefix='/protected')
    
    return app



if __name__ == '__main__':
    app = create_app()
    app.run(debug=True, port=5000)