from flask import request, jsonify,render_template, redirect, url_for
from flask_jwt_extended import create_access_token
from werkzeug.security import generate_password_hash, check_password_hash
from . import auth_blueprint
from models import db, User 
from flask_cors import cross_origin

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
@cross_origin()
def login():
    data = request.get_json()

    # Ensure you receive username and password from the request
    if 'username' not in data or 'password' not in data:
        return jsonify({"message": "Missing username or password"}), 400

    # Try to find the user
    user = User.query.filter_by(username=data['username']).first()

    if user is None:
        return jsonify({"message": "User not found"}), 404

    # If user is found, check if the password matches
    if check_password_hash(user.password, data['password']):
        access_token = create_access_token(identity={'id': user.id, 'username': user.username})
        return jsonify(access_token=access_token), 200
    else:
        return jsonify({"message": "Invalid credentials"}), 401