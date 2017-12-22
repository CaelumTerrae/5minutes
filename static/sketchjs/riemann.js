var r;
var elem;
var blocks = 1;

function setup(){
	// Standard window setup
	r = windowWidth < windowHeight ? windowWidth : windowHeight;
	createCanvas(r+1, r);
	ellipse(0,r, r*2);
	frameRate(10)
	elem = document.getElementById("label");
	rectMode(CORNER)
	noFill()
}

function draw(){
	background(255);
	var area;
	area = 0;
	for(i = 0; i < blocks; i++){
		var x = r * i / blocks;
		var y = circle(x);
		rect(x,r-y,r/blocks,y);
		area += r/blocks * y;
	}
	ellipse(0,r, r*2);
	blocks++;

	// Divides by r^2 to make unit circle. Approximates pi
	elem.innerHTML = 4 * area / r / r;
}

function circle(x){
	return Math.sqrt(Math.pow(r,2) - Math.pow(x,2));
}