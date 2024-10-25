from flask import Flask, jsonify # type: ignore
from flask_cors import CORS         # type: ignore
from SQLAlchemy import create_engine   # type: ignore
from SQLAlchemy.orm import sessionmaker   # type: ignore
from models import Base

app = Flask(__name__)
CORS(app)  # Enable CORS for the entire app

# Database setup
DATABASE_URL = 'sqlite:///example.db'  # SQLite database file
engine = create_engine(DATABASE_URL)  # Create a database engine
Base.metadata.create_all(engine)     # Create all tables in the engine

@app.route('/api', methods=['GET'])
def home():
    return jsonify({"message": "Hello from Flask!"})

if __name__ == '__main__':
    app.run(debug=True, port=5000)
