var points = [];
var colors = [];
var g = 0;
var up = true;
var origin;
var POINTSLIMIT = 1000

function setup(){
	createCanvas(windowWidth, windowHeight);
	background(255);
	origin = new Point(windowWidth/2, windowHeight/2);
	angleMode(DEGREES);
	noStroke();
}

function draw(){
	
	// Make greenvalues of colors continuous. Moves up to 255 then back down to 0.
	if(up){
    	g++;
	    if(g == 255){
	      up = false;
	    }
  	}else{
	    g--;
	    if(g == 0){
	      up = true;
	    }
  	}

  	// Adds a point on mouseclick
	if (mouseIsPressed) {
		// Converts from cartesian to polar from origin for easy rotation
		var xComp = mouseX - origin.x;
		var yComp = mouseY - origin.y;
		var magnitude = Math.sqrt(Math.pow(xComp,2) + Math.pow(yComp,2));
		var xTheta = acos(xComp/magnitude);
		var yTheta = asin(yComp/magnitude);

		// adjusts xTheta value based on whether or not value is above or below y axis
		if(yTheta < 0){
			xTheta = 360 - xTheta;
		}

		points.push(new Polar(magnitude, xTheta));
		colors.push(new Color(255 * mouseX/windowWidth, 255 * mouseY/windowHeight, g));
	}

	if (points.length > POINTSLIMIT) {
		points.shift();
		colors.shift();
	}

	background(255);

	// Draws point and shifts theta of point by one
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
