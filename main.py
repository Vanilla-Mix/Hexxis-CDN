import flask
import os
from gevent.pywsgi import WSGIServer
from flask import Flask, render_template, send_from_directory, request, make_response
from bson.objectid import ObjectId





app = Flask(__name__)





@app.route('/')
def home():
    return render_template('index.html')







http_server = WSGIServer(('0.0.0.0', int(os.environ.get('PORT', 5000))), app)
http_server.serve_forever()

print("http://127.0.0.1:5000/")


