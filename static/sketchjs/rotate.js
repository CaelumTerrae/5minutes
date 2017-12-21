var points = [];
var colors = [];
var G = 0;
var origin;

function setup(){
	createCanvas(windowWidth, windowHeight);
	background(255);
	origin = new Point(windowWidth/2, windowHeight/2);
	angleMode(DEGREES);
	noStroke();
}

function draw(){
	
	G++;
	if(G == 256){
		G = 0;
	}

	if (mouseIsPressed) {
		var xComp = mouseX - origin.x;
		var yComp = mouseY - origin.y;
		var magnitude = Math.sqrt(Math.pow(xComp,2) + Math.pow(yComp,2));
		var xTheta = acos(xComp/magnitude);
		console.log(xTheta)
		var yTheta = asin(yComp/magnitude);
		console.log(yTheta)

		if(yTheta < 0){
			xTheta = 360 - xTheta;
		}

		points.push(new Polar(magnitude, xTheta));
		colors.push(new Color(255 * mouseX/windowWidth, 255 * mouseY/windowHeight, G));
	}

	background(255);

	for(var i = 0; i < points.length; i++){
		var x = points[i].r * cos(points[i].theta);
		var y = points[i].r * sin(points[i].theta);
		fill(colors[i].red, colors[i].blue, colors[i].green);
		ellipse(windowWidth/2 + x, windowHeight/2 + y, 15, 15);
		points[i].theta += 1;
	}
}

function Color(r, b, g) {
	this.blue = b;
	this.red = r;
	this.green = g;
}

function Point(x, y) {
  this.x = x;
  this.y = y;
}

function Polar(r, theta) {
  this.r = r;
  this.theta = theta;
}
