from flask import jsonify,session
from . import protected_blueprint
from utils.auth_utils import login_required

@protected_blueprint.route('/home', methods=['POST'])
@login_required
def home():
    return jsonify({"message": f"Welcome {session['username']}!"})