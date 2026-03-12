// Interactive Scene
// Abdullah Baig
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

// Person position
let personX, personY;

// backgrounds
let currentBack = 0;

function setup() {
  createCanvas(800, 600);
  personX = width / 2;
  personY = height - 150;
}

function draw() {
  drawBackground();
  drawSun();
  drawGrass();
  drawPerson();
  drawName();
}

// Background 
function drawBackground() {
  if (currentBack == 0) {
    background(135, 206, 235);
  } else if (currentBack == 1) {
    background(25, 25, 112);
  } else if (currentBack == 2) {
    background(255, 153, 51);
  } else if (currentBack == 3) {
    background(102, 255, 178);
  }
}

// Sun following the Mouse
function drawSun() {
  fill(255, 204, 0);
  noStroke();
  ellipse(mouseX, mouseY, 100, 100);
}

// Grass
function drawGrass() {
  fill(34, 139, 34);
  rect(0, height - 100, width, 100);
}

// Person
function drawPerson() {
  fill(255, 0, 0);
  rect(personX - 15, personY - 50, 30, 50); // body

  fill(0);
  ellipse(personX, personY - 65, 30, 30); // head
}

// Name in corner
function drawName() {
  fill(0);
  textSize(16);
  text("Abdullah Baig", 10, height - 10);
}

// Move person with arrow keys
function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    personX -= 10;
  } else if (keyCode === RIGHT_ARROW) {
    personX += 10;
  } else if (keyCode === UP_ARROW) {
    personY -= 10;
  } else if (keyCode === DOWN_ARROW) {
    personY += 10;
  } else if (key === 'r' || key === 'R') {
    // Reset position
    personX = width / 2;
    personY = height - 150;
  }
}

// click the centre of mouse to change backround
function mousePressed() {
  if (mouseButton === CENTER) {
    currentBack = (currentBack + 1) % 4;
  }
}