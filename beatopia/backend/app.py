from flask import Flask, render_template, jsonify # type: ignore
from flask_cors import CORS         # type: ignore
from flask_sqlalchemy import SQLAlchemy
from flask_login import UserMixin, LoginManager, login_user, logout_user, login_required
from flask_bcrypt import Bcrypt
from flask_login import LoginManager
from models import Base
from routes.auth import auth_blueprint

# App setup
app = Flask(__name__)
app.config.from_object('config.Config')
CORS(app)  # Enable CORS for the entire app

app.register_blueprint(auth_blueprint, url_prefix="/auth")

db = SQLAlchemy(app)

login_manager = LoginManager()
login_manager.init_app(app)

if __name__ == '__main__':
    app.run(debug=True, port=5000)