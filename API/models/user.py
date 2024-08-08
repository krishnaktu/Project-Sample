from flask_restful import Resource
from flask import  jsonify, request, make_response
from Database.base import engine, Base, Session
from Database.user import studentUserAccount

class User(Resource): 
    def get(self, id): 
        session = Session()
        accounts = session.query(studentUserAccount).all()
        
        for user in accounts:
            if (request.args.get('email')==user.email and request.args.get('password') == user.password  ):
                return make_response(jsonify({'message': 'Login Successfull!!!!!',"course":user.course,"amount":user.amount}), 200)
        
        session.close()
        return  make_response(jsonify({'message': 'Account doesn\'t exist!!!!!'}), 400)




    def post(self, id):
        session = Session()
        accounts = session.query(studentUserAccount).all()
        data = request.get_json()
        
        for user in accounts:
            if (user.email == data['email']):
                return make_response(jsonify({'message': 'Email already taken!!!!!'}), 400)
        
        session.add(studentUserAccount(data['name'], data['email'], data['password'], data['phoneNumber'], data['qualification'],data['address'],data['course'],data['amount'],data["courseMode"]))
        session.commit()
        session.close()
        return make_response(jsonify({'message': 'Account created successfully!!!!!'}), 201)
    



