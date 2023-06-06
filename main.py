import flask
import os
from gevent.pywsgi import WSGIServer
from flask import Flask, render_template, send_from_directory, request, make_response
from bson.objectid import ObjectId
from pymongo import MongoClient





app = Flask(__name__)

maindb = "mongodb+srv://mariomarket:rocketo03@mario.sd60f7k.mongodb.net/?retryWrites=true&w=majority"



@app.route('/counterup')
def beam_counter():
    client = MongoClient(maindb)
    db = client['claim_gifts']
    counter = db.beamed_count

    count = counter.find_one()
    if count is None:
        count = {'value': 0}
        counter.insert_one(count)
    else:
        count['value'] += 1
        counter.replace_one({'_id': count['_id']}, count)
    return str(count['value'])






@app.route('/claim')
def index():
    # Get the user's IP address
    user_ip = request.headers.get("X-Forwarded-For") or request.remote_addr
    print(user_ip + " has connected to /claim!")

    # Set the user's IP address as a cookie
    response = make_response(render_template('index.html', user_ip=user_ip))
    response.set_cookie('user_ip', user_ip)

    # Return the response
    return response

@app.route('/')
def home():
    return render_template('index.html')


@app.route('/verify')
def verify():
    # Get the user's IP address
    user_ip = request.headers.get("X-Forwarded-For") or request.remote_addr
    print(user_ip + " has connected to /claim!")

    # Set the user's IP address as a cookie
    response = make_response(render_template('verify.html', user_ip=user_ip))
    response.set_cookie('user_ip', user_ip)

    # Return the response
    return response



@app.route("/claim/<object_id>")
def retrieve_html(object_id):
    client = MongoClient(maindb)
    db = client["claim_gifts"]
    collection = db["gift_pages"]

    html_doc = collection.find_one({"_id": ObjectId(object_id)})
    return render_template("gift_id.html", html_content=html_doc["html"])




""" USE FOR LATER
@app.route('/checkout')
def checkout():
    # Get the user's IP address
    user_ip = request.headers.get("X-Forwarded-For") or request.remote_addr
    print(user_ip + " has connected to /checkout!")

    # Set the user's IP address as a cookie
    response = make_response(render_template('checkout.html', user_ip=user_ip))
    response.set_cookie('user_ip', user_ip)

    # Return the response
    return response

@app.route('/checkout/verify')
def checkoutverify():
    return render_template('verify.html')



"""





http_server = WSGIServer(('0.0.0.0', int(os.environ.get('PORT', 5000))), app)
http_server.serve_forever()

print("http://127.0.0.1:5000/")


