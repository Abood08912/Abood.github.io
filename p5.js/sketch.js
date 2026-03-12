// Project: Interactive Scene – Moon Explorer
// Name: Abdullah Baig
// Date: 15 February 2026



// GLOBAL VARIABLES

// Character position
let astronautX = 200;
let astronautY = 300;

// Background state (0,1,2,3)
let currentBack = 0;


// SETUP FUNCTION

function setup() {
  createCanvas(800, 500);
}


// MAIN DRAW LOOP

function draw() {
  drawBackground();
  drawGround();
  drawSun();
  drawAstronaut();
  drawName();
}


// BACKGROUND STATES

function drawBackground() {

  // 4 different background states
  if (currentBack === 0) {
    background(10, 10, 35); // Night blue
  }
  else if (currentBack === 1) {
    background(60, 0, 90); // Purple sky
  }
  else if (currentBack === 2) {
    background(0, 120, 150); // Teal sky
  }
  else if (currentBack === 3) {
    background(150, 80, 0); // Sunset orange
  }
}


// GROUND

function drawGround() {
  fill(180);
  rect(0, 350, width, 150); // Ground surface

  // Craters
  fill(140);
  ellipse(200, 380, 80, 40);
  ellipse(500, 390, 100, 50);
}


// SUN (Mouse Interaction)

function drawSun() {
  fill(255, 204, 0);
  ellipse(mouseX, mouseY, 100, 100);
}


// ASTRONAUT (Protagonist)

function drawAstronaut() {

  // Body
  fill(255);
  rect(astronautX, astronautY, 40, 60);

  // Helmet
  fill(200);
  ellipse(astronautX + 20, astronautY - 10, 40, 40);

  // Legs
  line(astronautX + 10, astronautY + 60,
       astronautX + 10, astronautY + 80);
  line(astronautX + 30, astronautY + 60,
       astronautX + 30, astronautY + 80);

  // Arms
  line(astronautX, astronautY + 20,
       astronautX - 20, astronautY + 30);
  line(astronautX + 40, astronautY + 20,
       astronautX + 60, astronautY + 30);
}


// KEYBOARD CONTROLS

function keyPressed() {

  // Movement
  if (keyCode === LEFT_ARROW) {
    astronautX -= 10;
  }
  if (keyCode === RIGHT_ARROW) {
    astronautX += 10;
  }
  if (keyCode === UP_ARROW) {
    astronautY -= 10;
  }
  if (keyCode === DOWN_ARROW) {
    astronautY += 10;
  }

  // Reset key
  if (key === 'r' || key === 'R') {
    astronautX = 200;
    astronautY = 300;
  }
}


// MIDDLE MOUSE CLICK

function mousePressed() {
  if (mouseButton === CENTER) {
    currentBack++;
    
    if (currentBack > 3) {
      currentBack = 0;
    }
  }
}


// NAME DISPLAY

function drawName() {
  fill(255);
  textSize(16);
  text("Abdullah Baig", 10, height - 10);
}