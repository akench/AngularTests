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

    if request.method == 'POST':
        return json.dumps(json_data['data'] + ' was received!!')



if __name__ == '__main__':
    app.debug = True
    app.run()
        
