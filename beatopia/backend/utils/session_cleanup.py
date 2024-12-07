from datetime import datetime
from flask import current_app
from db import db
from flask_session import Session

def clean_expired_sessions():
    """Delete expired sessions."""
    with current_app.app_context():
        now = datetime.utcnow()
        db.session.query(Session).filter(Session.expires_at < now).delete()
        db.session.commit()
        print("Expired sessions cleaned up.")