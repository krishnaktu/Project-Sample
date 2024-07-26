from flask import Flask, jsonify, request
from flask_restful import Resource, Api 
from flask_cors import CORS
from models.user import User
from Database.base import engine, Base

app = Flask(__name__)
cors = CORS(app)
api = Api(app) 
Base.metadata.create_all(engine) 

api.add_resource(User, '/user/<string:id>')

if __name__ == '__main__': 
    app.run(debug = True) 





