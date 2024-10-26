# Beatopia: AI-Powered Musical Productivity Tool

## Overview
Beatopia is an AI-driven application that lets users craft immersive music mixes by blending built-in beats with calming nature sounds. This tool aims to enhance productivity through ambient soundscapes while providing personalized music recommendations.

## Features
- **Ambience Tuner**: Create and save mixes with various sounds.
- **Intutive Music Player**: Play your created mixes in a minimized view.
- **Kanban Task Board**: Organize your tasks on a drag-and-drop board.
- **Discover Page**: (Planned) Recommendations will use a trained supervised learning model to suggest new tunes.

## Tech Stack
- **Frontend**: React, Bootstrap
- **Backend**: Flask
- **Database**: PostgreSQL

## Installation & Setup

1. **Clone the repository**
   ```git clone https://github.com/username/beatopia.git```

2. **Navigate into the project directory**
   ```cd beatopia```

3. **Backend Setup**:
   - Navigate to the backend directory:
     ```cd backend```
   - Install the required Python packages:
     ```pip install -r requirements.txt```
   - Start the Flask server:
     ```python app.py```

4. **Frontend Setup**:
   - Open a new terminal and go to the frontend directory:
     ```cd ../frontend```
   - Install the necessary dependencies:
     ```npm install```
   - Run the React development server:
     ```npm start```

5. **Database Setup**
   - Set up a PostgreSQL database and configure it in `backend/config.py`.
   - Run migrations if any are provided.

## Usage
1. Access the application at `http://localhost:3000` (default React port).
2. Use the Kanban board to create, update, or delete tasks.
3. Tune the ambient mix to personalize your workspace sound environment.
