var points = []
var g = 0;
var up = true;
var POINTSLIMIT = 150
function setup(){
	createCanvas(windowWidth, windowHeight);
	noStroke();
	fill(0);
	frameRate(100)
}

function draw(){

	// Make greenvalues of colors continuous. moves up to 255 then back down to 0.
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

	fill(255 * mouseX/windowWidth, 255 * mouseY/windowHeight, g);
	
	background(255);
	points.push(new Point(mouseX, mouseY));

	// Limits number of points to 150 
	if (points.length > POINTSLIMIT) {
		points.shift();
	}

	// Loop to draw other points
	for(var i = points.length - 1; i >=0; i--){
		ellipse(points[i].x, points[i].y, i/2, i/2);
	}
}

function Point(x, y) {
  this.x = x;
  this.y = y;
}