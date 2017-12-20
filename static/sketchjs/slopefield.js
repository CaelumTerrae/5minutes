var GRIDWIDTH = 10
var GRIDHEIGHT = 10


var grid = new Array(GRIDHEIGHT);
for(var i = 0; i < GRIDHEIGHT; i++){
  grid[i] = new Array(GRIDWIDTH);
}

function setup() {
  // put setup code here
  createCanvas(windowWidth, windowHeight);

  for(var i = 0; i < GRIDHEIGHT; i++){
    for(var j = 0; j < GRIDWIDTH; j++){
      grid[i][j] = new Point(windowWidth/(GRIDWIDTH+1)*(j+1), windowHeight/(GRIDHEIGHT+1) * (i+1));
    }
  }
  strokeWeight(4);
}

function draw() {
  // put drawing code here
  // mouseX, and mouseY refer to mouse location variables
  // Draw 4 lines that always point @ mouse.
  background(255 * mouseX/windowWidth, 255 * mouseY/windowWidth, (mouseX + mouseY) % 256);

  for(var i = 0; i < GRIDHEIGHT; i++){
    for(var j = 0; j < GRIDWIDTH; j++){
      //Find unit vector in direction of mouseX
      var xComp = grid[i][j].x - mouseX;
      var yComp = grid[i][j].y - mouseY;
      var magnitude = Math.sqrt(Math.pow(xComp,2) + Math.pow(yComp,2));
      xComp = 30 * xComp / magnitude;
      yComp = 30 * yComp / magnitude;

      line(grid[i][j].x - xComp/2, grid[i][j].y - yComp/2, grid[i][j].x + xComp/2, grid[i][j].y + yComp/2);
    }
  }

}

function Point(x, y) {
  this.x = x;
  this.y = y;
}
