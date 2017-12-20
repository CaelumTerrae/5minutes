var points = [];
var colors = [];

function setup() {
	createCanvas(windowWidth, windowHeight);
	strokeWeight(4);
}

function draw() {
	background(0)
	for(var i = 0; i < points.length; i++){
		stroke(colors[i].blue, colors[i].red, colors[i].green)
		line(points[i].x, points[i].y, mouseX, mouseY);
	}
}

function mouseClicked() {
  points.push(new Point(mouseX, mouseY));
  colors.push(new Color());
}

function keyPressed(){
  points = [];
  colors = [];
  console.log("reached here")
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