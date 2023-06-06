import flask
import os
from gevent.pywsgi import WSGIServer
from flask import Flask, render_template, send_from_directory, request, make_response
from bson.objectid import ObjectId





app = Flask(__name__)





@app.route('/')
def home():
    return render_template('index.html')






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


