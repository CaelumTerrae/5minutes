function setup(){
	createCanvas(windowWidth, windowHeight);
}

function draw(){
  if (mouseIsPressed) {
    fill(0);
  } else {
    fill(random(0,256), random(0,256), random(0,256));
  }
  ellipse(mouseX, mouseY, 80, 80);
}