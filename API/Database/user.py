from sqlalchemy import Column, String, Integer
from Database.base import Base

class studentUserAccount(Base):
    __tablename__ = 'studentAccount'

    id=Column(Integer ,primary_key=True)
    name = Column(String)
    email = Column(String)
    password = Column(String) 
    phoneNumber = Column(Integer)
    address = Column(String)
    qualification = Column(String)
    course = Column(String)
    courseMode = Column(String)
    fee=Column(Integer)

    def __init__(self, name, email, password, phoneNumber, address,qualification,course,courseMode):
        self.name = name
        self.email = email
        self.password = password
        self.phoneNumber = phoneNumber
        self.address = address
        self.qualification=qualification
        self.course = course
        self.courseMode= courseMode
        self.fee =0

