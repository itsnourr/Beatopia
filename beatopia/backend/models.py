
from sqlalchemy import Column, Integer, String  # type: ignore 
from sqlalchemy.ext.declarative import declarative_base  # type: ignore

Base = declarative_base()  # Create a base class for declarative models

# Sample User model
# class User(Base):
#     __tablename__ = 'users'  # Table name in the database
    
#     id = Column(Integer, primary_key=True)  # Primary key
#     name = Column(String, nullable=False)     # User's name (non-nullable)
#     age = Column(Integer)                      # User's age (nullable)