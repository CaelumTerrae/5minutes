var points = []
var G = 0;
function setup(){
	createCanvas(windowWidth, windowHeight);
	noStroke();
	fill(0);
}

function draw(){
	G++;
	if(G == 256){
		G = 0;
	}

	fill(255 * mouseX/windowWidth, 255 * mouseY/windowHeight, G);
	
	background(255);
	points.push(new Point(mouseX, mouseY));
	if (points.length > 150) {
		points.shift();
	}

	for(var i = points.length - 1; i >=0; i--){
		ellipse(points[i].x, points[i].y, i/2, i/2);
	}
}

function Point(x, y) {
  this.x = x;
  this.y = y;
}