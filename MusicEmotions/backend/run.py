from flask import Flask, request
import logging
from logging.handlers import RotatingFileHandler

app = Flask(__name__)

@app.route('/')
def hello_world():
    return 'Hello, World!'


@app.route('/register', methods=['POST'])
def register():

    if request.method == 'POST':
        x = request.form['nm']
        app.logger.info(x)
        # print(x)
        return x



if __name__ == '__main__':
    handler = RotatingFileHandler('foo.log', maxBytes=10000, backupCount=1)
    handler.setLevel(logging.INFO)
    app.logger.addHandler(handler)
    app.run()
        
