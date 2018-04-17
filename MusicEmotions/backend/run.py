from flask import Flask, request
from flask_cors import CORS, cross_origin
import json
from pymongo import MongoClient

app = Flask(__name__)

cors = CORS(app)


client = MongoClient('mongodb://localhost:27017/musicEmotionDB')
collection = client.musicEmotionDB.users

@app.route('/')
def hello_world():
    return 'Hello, World!'


@app.route('/register', methods=['POST'])
def register():

    json_data = request.json
    username = json_data['username']
    password = json_data['password']

    if request.method == 'POST':   

        collection.insert({'username' : username, 
            'password': password, 
            'songs': {
                'happy': [],
                'sad': [],
                'angry': [],
                'relaxing': [],
                'motivational': [],
                'tense': []
            }})

        return json.dumps('success')


@cross_origin
@app.route('/login', methods=['POST'])
def login():

    json_data = request.json

    username = json_data['username']
    password = json_data['password']

    for obj in collection.find():
        if obj['username'] == username and obj['password'] == password:
            return json.dumps('true')

    return json.dumps('false');



if __name__ == '__main__':
    app.run(debug = True)
        
