from flask import Flask, jsonify,redirect, render_template, request

app = Flask(__name__)

UNLABELED_SKETCHES = ['slopefield', 'prettycircles', 'follow', 'energy', 'rotate']
LABELED_SKETCHES = ['montecarlo', 'regular', 'riemann']

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

@app.route("/sketch/<name>")
def sketch(name):
	if name in UNLABELED_SKETCHES:
		return render_template("unlabeled.html", sketch=name);

	if name in LABELED_SKETCHES:
		return render_template("labeled.html", sketch=name);

	return "that sketch does not exist (yet)";

@app.route("/browse")
def browse():
	return render_template("browse.html")

if __name__ == "__main__":
	app.run()