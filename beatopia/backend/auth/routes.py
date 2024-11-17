from flask import request, jsonify,render_template, redirect, url_for
from flask_jwt_extended import create_access_token
from werkzeug.security import generate_password_hash, check_password_hash
from . import auth_blueprint
from models import db, User 

@auth_blueprint.route('/register', methods=['GET'])
def register():
    data = request.json
    hashed_password = generate_password_hash(data['password'])
    new_user = User(username=data['username'], password=hashed_password)
    
    db.session.add(new_user)
    db.session.commit()
    
    return jsonify({"message": "User registered successfully"}), 201

@auth_blueprint.route('/login', methods=['GET'])
def login():
    data = request.json
    user = User.query.filter_by(username=data['username']).first()
    
    if user and check_password_hash(user.password, data['password']):
        # Create JWT token
        access_token = create_access_token(identity={'id': user.id, 'username': user.username})
        return jsonify(access_token=access_token), 200
    
    return jsonify({"message": "Invalid credentials"}), 401