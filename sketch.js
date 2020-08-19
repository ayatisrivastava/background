
var r;
var g;
var b;
var pointer;

// INITIALIZE ALL YOUR VARIABLES
// Ideally you would create 3 variables. red blue green or r, g, b


function setup(){

  createCanvas(1200,600);
  r = createSprite(400,200,400,200);
  r.shapeColour = "red";
  g = createSprite(800,400,400,200);
  g.shapeColour = "green";
  b = createSprite(1200,600,400,200)
  b.shapeColour = "blue";
  pointer = createSprite(600,300,20,20)
  pointer.x = World.mouseX;
  pointer.y = World.mouseY;
}


function draw(){
  if (r = pointer.x === pointer.width/2 + r.width/2) {
    r.shapeColour = "green"
  }
  if (g = pointer.x === pointer.width/2 + g.width/2) {
    g.shapeColour = "blue"
  }
  if (b = pointer.x === pointer.width/2 + b.width/2) {
    b.shapeColour = "red"
  }

  // change the value of Red based on the mouse movement about the X axis
  // change the value of Green based on the mouse movement about the X axis
  // change the value of Blue based on the mouse movement about the X axis

  // Use the map() function to do so. 

  // Pass the values to the background() function you have learnt previously.

  // Create an ellipse that will move around with you mouse about the X axis.
  // Remember to fill the canvas with white paint before creating the ellipse.
}