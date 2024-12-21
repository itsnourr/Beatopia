from flask import Blueprint

protected_blueprint = Blueprint('protected', __name__)

from . import home 
from . import mixlab
from . import get_db
from . import task_utils