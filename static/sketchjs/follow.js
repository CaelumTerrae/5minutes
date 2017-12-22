var points = [];
var colors = [];

function setup() {
	createCanvas(windowWidth, windowHeight);
	strokeWeight(4);
}

function draw() {
	background(0)

	// Draws lines from all points to mouse in respective colors
	for(var i = 0; i < points.length; i++){
		stroke(colors[i].blue, colors[i].red, colors[i].green)
		line(points[i].x, points[i].y, mouseX, mouseY);
	}
}

function mouseClicked() {
	// Generates new point and respective color for point in parallel array.
  	points.push(new Point(mouseX, mouseY));
  	colors.push(new Color());
}

function keyPressed(){
  	points = [];
  	colors = [];
  	return false;
}


function Point(x, y) {
  	this.x = x;
  	this.y = y;
}

function Color() {
	this.blue = random(0,256);
	this.red = random(0,256);
	this.green = random(0,256);
}