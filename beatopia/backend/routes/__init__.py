from flask import Blueprint

protected_blueprint = Blueprint('protected', __name__)

from . import dashboard 