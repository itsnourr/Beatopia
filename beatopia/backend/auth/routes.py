from flask import request, jsonify
from . import auth_blueprint
from db import db
from models import User
from flask_cors import cross_origin 
from flask import request, session, jsonify


@auth_blueprint.route('/register', methods=['POST'])
def register():
    data = request.json
    #hashed_password = generate_password_hash(data['password'])  
    #data['password'] already hashed. Idk why?

    existing_user = User.query.filter_by(email=data['email']).first()
    if existing_user:
        return jsonify(message="Email already exists"), 400
    
    new_user = User(username=data['username'], password=data['password'], email=data['email'])
    
    db.session.add(new_user)
    db.session.commit()
    
    return jsonify({"message": "User registered successfully"}), 201

@auth_blueprint.route('/login', methods=['POST'])
@cross_origin(supports_credentials=True)
def login():
    data = request.get_json()

    if 'username' not in data or 'password' not in data:
        return jsonify({"message": "Missing username or password"}), 400

    user = User.query.filter_by(username=data['username']).first()
    if user and user.check_password(data['password']):
        session['user_id'] = user.id
        session['username'] = user.username
        return jsonify({"message": "Logged in successfully"}), 200
    else:
        return jsonify({"message": "Invalid credentials"}), 401




@auth_blueprint.route('/logout', methods=['POST'])
def logout():
    session.clear()  # Clears all session data
    response = jsonify({"message": "Logged out successfully"})
    response.set_cookie('session', expires=0)  # Force cookie expiration
    return response

@auth_blueprint.route('/check-session', methods=['GET'])
def check_session():
    user_id = session.get('user_id')
    if user_id:
        return jsonify({"message": "Session is active", "user_id": user_id}), 200
    else:
        return jsonify({"message": "Session expired or not active"}), 401