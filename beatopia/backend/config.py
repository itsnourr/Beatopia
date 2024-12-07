from db import db
from datetime import timedelta

class Config:
    SECRET_KEY = "0d1c36fb0a72cca9c77157fe6e3f100b"
    SQLALCHEMY_DATABASE_URI = "mysql://root:CaroKan2004!@localhost/beatopia"
    SQLALCHEMY_TRACK_MODIFICATIONS = False
    # JWT_SECRET_KEY = "18f64fbeefd4f36d0dacb14d14e13f9d"
    SESSION_TYPE = 'sqlalchemy'
    SESSION_SQLALCHEMY = db
    SQLALCHEMY_TRACK_MODIFICATIONS = False
    SESSION_PERMANENT = False
    PERMANENT_SESSION_LIFETIME = timedelta(minutes=1)
    SESSION_COOKIE_HTTPONLY = True
    SESSION_COOKIE_NAME = 'session'
    SESSION_COOKIE_SAMESITE = 'None'
    SESSION_COOKIE_SECURE = True 
    SESSION_COOKIE_PATH = '/'

