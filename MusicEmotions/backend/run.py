from flask import Flask, request
from flask_cors import CORS, cross_origin
import json
from pymongo import MongoClient
from predict import predict_class, label_to_emot

app = Flask(__name__)

cors = CORS(app)


client = MongoClient('mongodb://localhost:27017/musicemotions')
collection = client.musicemotions.users


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
            print('success!!')
            return json.dumps('true')

    print('could not login!')
    return json.dumps('false');


@cross_origin
@app.route('/classify', methods=['POST'])
def classify_audio():

    #will send a list of the youtube links
    json_data = request.json
    url = json_data['url']

    label = predict_class(url)

    return json.dumps(label_to_emot[label])


if __name__ == '__main__':
    app.run(debug = True)
        
