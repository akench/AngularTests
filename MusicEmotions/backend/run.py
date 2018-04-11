from flask import Flask, request
from flask_cors import CORS, cross_origin
import json

app = Flask(__name__)
cors = CORS(app)

@app.route('/')
def hello_world():
    return 'Hello, World!'


@app.route('/register', methods=['POST'])
def register():

    json_data = request.json
    username = json_data['username']
    password = json_data['password']

    if request.method == 'POST':
        return json.dumps('hi')


@app.route('/login', methods=['POST'])
def login():

    json_data = request.json

    username = json_data['username']
    password = json_data['password']

    #if user in DB
    if True:
        return json.dumps('true')
    else:
        return json.dumps('false')



if __name__ == '__main__':
    app.debug = True
    app.run()
        
