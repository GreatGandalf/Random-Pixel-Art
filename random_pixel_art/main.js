var canvasX = 1180;
var canvasY = 896;

var grids = [];

var randGen;

var mirror;

var gridSize = 240;
var margin = 44;

var gridPixels = 8;

var loops = false;

var colors = [];

function setup() {
  frameRate(15);
  createCanvas(canvasX,canvasY);
  noStroke();
  color1 = color(52, 152, 219);
  color2 = color(26, 188, 156);
  color3 = color(155, 89, 182);
  colors.push(color1,color2,color3);
  makeGrids(12);
  randGen = new RandomGenerator(grids,0.35);
  randGen.generate();
  mirror = new Mirror(grids);
  mirror.horizontaly();
  console.log("Press x to loop");
}

function draw() {
  if(loops === true) {
    randGen.generate();
    mirror.horizontaly();
    noLoop();
    setTimeout(function(){ loop(); },5000);
  }
  background(28, 42, 57);
  for (var i = 0; i < grids.length; i++) {
    grids[i].show();
  }
}

function makeGrids(amount) {
  for (var i = 0; i < amount; i++) {
    var row = floor(i/4);
    var chance = 0.25 + row*0.1;
    var chance = 0.05 + i*0.05;
    print(chance);
    var x = margin+i*gridSize+i*margin-(row*4*(margin+gridSize));
    var y = margin+row*gridSize+row*margin;
    grid = new Grid(x,y,gridSize,gridSize,gridPixels,gridPixels,colors[row],chance);
    grids.push(grid);
  }
}

function mouseClicked() {
  randGen.generate();
  mirror.horizontaly();
}

function keyPressed() {
  if (key === "x") {
    if(loops === true) {
      loops = false;
    } else {
      loops = true;
    }
  }
}
