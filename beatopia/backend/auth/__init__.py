from flask import Blueprint

auth_blueprint = Blueprint('auth', __name__)

from . import routes  # Import routes to register with the Blueprint    