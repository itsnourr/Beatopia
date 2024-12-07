from apscheduler.schedulers.background import BackgroundScheduler
from utils.session_cleanup import clean_expired_sessions

def init_scheduler(app):
    scheduler = BackgroundScheduler()
    scheduler.add_job(
        func=clean_expired_sessions, 
        trigger='interval', 
        minutes=30  # Adjust frequency as needed
    )
    scheduler.start()

    @app.before_first_request
    def start_scheduler():
        app.logger.info("Scheduler started.")

    @app.teardown_appcontext
    def shutdown_scheduler(exception=None):
        scheduler.shutdown()

    return scheduler
