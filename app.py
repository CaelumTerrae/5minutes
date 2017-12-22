from flask import Flask, jsonify,redirect, render_template, request

app = Flask(__name__)

# Ensure responses aren't cached
@app.after_request
def after_request(response):
    response.headers["Cache-Control"] = "no-cache, no-store, must-revalidate"
    response.headers["Expires"] = 0
    response.headers["Pragma"] = "no-cache"
    return response

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/slope")
def slope():
	return render_template("slopefield.html")

@app.route("/prettycircles")
def pretty():
	return render_template("prettycircles.html")

@app.route("/theyfollow")
def follow():
	return render_template("follow.html")

@app.route("/energy")
def energy():
	return render_template("energy.html")

@app.route("/rotate")
def rotate():
	return render_template("rotate.html")

@app.route("/montecarlo")
def montecarlo():
	return render_template("montecarlo.html")

@app.route("/riemann")
def riemann():
	return render_template("riemann.html")

@app.route("/browse")
def browse():
	return render_template("browse.html")

if __name__ == "__main__":
	app.run()