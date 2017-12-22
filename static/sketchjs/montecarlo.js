var r;
var elem;
var total = 0;
var inside = 0;

function setup(){
	r = windowWidth < windowHeight ? windowWidth : windowHeight;
	createCanvas(r, r);
	ellipse(0,r, r*2);
	frameRate(10)
	elem = document.getElementById("label");
}

function draw(){
	// Picks random x and y to throw dart, plotted as green if inside circle, red if not
	x = random(0,r);
	y = random(0,r);

	if(y < circle(x)){
		fill('green')
		inside++;
	}else{
		fill('red')
	}
	total++;
	ellipse(x, r - y, 8, 8);

	// Ratio of darts inside circle to total darts is ~1/4 PI, gets closer with more darts.
	elem.innerHTML = 4 * inside / total;
}

function circle(x){
	return Math.sqrt(Math.pow(r,2) - Math.pow(x,2));
}