from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker

dbURI = 'postgresql://postgres:krishna1999@localhost:5432/sqlalchemy'
engine = create_engine(dbURI)
Session = sessionmaker(bind=engine)
Base = declarative_base()