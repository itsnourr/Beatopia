from flask import Blueprint, request, jsonify

auth_blueprint = Blueprint('auth', __name__)

@auth_blueprint.route('/login', methods=['POST'])
def login():
    data = request.json
    # Process login here
    return jsonify({"message": "Logged in successfully"})

@auth_blueprint.route('/register', methods=['POST'])
def register():
    data = request.json
    # Process registration here
    return jsonify({"message": "User registered successfully"})