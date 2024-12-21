from db import db
from werkzeug.security import generate_password_hash, check_password_hash
from sqlalchemy import CheckConstraint

class User(db.Model):
    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(80), unique=True, nullable=False)
    password = db.Column(db.String(200), nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False) 
    isAdmin = db.Column(db.Boolean , default=False)

    # Relationships
    tasks = db.relationship('Task', backref='user', lazy=True)  # One-to-many with Task
    mixes = db.relationship('Mix', backref='user', lazy=True)  # One-to-many with Mix

    def __init__(self, username, password , email):
        self.username = username
        self.password = generate_password_hash(password)
        self.email = email

    def check_password(self, password):
        return check_password_hash(self.password, password)
    

class Beat(db.Model):
    __tablename__ = 'beats'

    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    title = db.Column(db.String(100), nullable=False)  # Title of the beat
    file_path = db.Column(db.String(255), nullable=False)  # Path to the audio file
    duration = db.Column(db.Float)  # Duration of the beat in seconds
    description = db.Column(db.String(255), nullable=True)

    # Relationships
    mixes = db.relationship('Mix', backref='beat', lazy=True)  # One-to-many with Mix

class Sound(db.Model):
    __tablename__ = 'sounds'

    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    title = db.Column(db.String(100), nullable=False)  # Title of the sound
    file_path = db.Column(db.String(255), nullable=False)  # Path to the audio file
    duration = db.Column(db.Float)  # Duration of the sound in seconds
    description = db.Column(db.String(255), nullable=True)  

    # Relationships
    mixes = db.relationship('Mix', backref='sound', lazy=True)  # One-to-many with Mix


class Mix(db.Model):
    __tablename__ = 'mixes'

    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    title = db.Column(db.String(100), nullable=False)  # Title of the mix
    beat_id = db.Column(db.Integer, db.ForeignKey('beats.id'), nullable=False)  # Foreign key to Beat
    sound_id = db.Column(db.Integer, db.ForeignKey('sounds.id'), nullable=False)  # Foreign key to Sound
    file_path = db.Column(db.String(255), nullable=False)  # Path to the mixed audio file
    created_at = db.Column(db.DateTime, default=db.func.now())  # Timestamp
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)


class Task(db.Model):
    __tablename__ = 'tasks'

    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    title = db.Column(db.String(100), nullable=False)  # Title of the task
    status = db.Column(db.String(100), default='to-do')  # Task completion status
    
    
    # Add a Check constraint for status
    __table_args__ = (
        CheckConstraint(
            "status IN ('done', 'to-do', 'doing')", 
            name='check_status_valid'
        ),
    )

    due_at = db.Column(db.DateTime, default=db.func.now())  # Last update
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)