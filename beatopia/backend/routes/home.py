from flask import jsonify
from flask_jwt_extended import jwt_required, get_jwt_identity
from . import protected_blueprint

@protected_blueprint.route('/home', methods=['POST'])
@jwt_required()
def dashboard():
    current_user = get_jwt_identity()  # Get the identity from the token
    return jsonify({
        "message": f"Welcome, {current_user['username']}!",
        "user_id": current_user['id']
    }), 200