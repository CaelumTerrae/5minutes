var r;
var origin;
var sides = 3;

function setup(){
	// Standard window setup.
	r = windowWidth < windowHeight ? windowWidth : windowHeight;
	createCanvas(r,r);
	origin = new Point(r/2, r/2);
	ellipse(origin.x,origin.y,r,r);
	angleMode(DEGREES);
	frameRate(5)
	noFill();
}

function draw(){
	background(255);
	ellipse(origin.x,origin.y,r,r);

	// Code below generates shape of regular polygon of n sides. Divides 360 to n sides and plots vertexes using polar coords.
	beginShape();
	var angle = (360)/sides;
	for(var i = 0; i < sides; i++){
		var theta = angle * i;
		var xComp = r/2 * cos(theta);
		var yComp = r/2 * sin(theta);
		vertex(origin.x + xComp, origin.y + yComp);
		fill(0,255, 0);
		ellipse(origin.x + xComp, origin.y + yComp, 10);
		noFill();
	}
	endShape(CLOSE);
	sides++;
}

function Point(x, y){
	this.x = x;
	this.y = y;
}