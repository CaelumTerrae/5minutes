var GRIDWIDTH = 10
var GRIDHEIGHT = 10
var g = 0
var up = true;

var grid = new Array(GRIDHEIGHT);
for(var i = 0; i < GRIDHEIGHT; i++){
  grid[i] = new Array(GRIDWIDTH);
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  for(var i = 0; i < GRIDHEIGHT; i++){
    for(var j = 0; j < GRIDWIDTH; j++){
      grid[i][j] = new Point(windowWidth/(GRIDWIDTH+1)*(j+1), windowHeight/(GRIDHEIGHT+1) * (i+1));
    }
  }
  strokeWeight(4);
}

function draw() {
  // Adgust background on mouseX, mouseY, and green value as function of time.
  background(255 * mouseX/windowWidth, 255 * mouseY/windowWidth, g);

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

  // Updates each "slope" in slopefield
  for(var i = 0; i < GRIDHEIGHT; i++){
    for(var j = 0; j < GRIDWIDTH; j++){
      // Find unit vector in direction of mouse location
      var xComp = grid[i][j].x - mouseX;
      var yComp = grid[i][j].y - mouseY;
      var magnitude = Math.sqrt(Math.pow(xComp,2) + Math.pow(yComp,2));
      xComp = 30 * xComp / magnitude;
      yComp = 30 * yComp / magnitude;

      // Makes line rotate about center
      line(grid[i][j].x - xComp/2, grid[i][j].y - yComp/2, grid[i][j].x + xComp/2, grid[i][j].y + yComp/2);
    }
  }

}

function Point(x, y) {
  this.x = x;
  this.y = y;
}
