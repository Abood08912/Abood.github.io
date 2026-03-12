// Interactive Winter Scene
// Abdullah Baig
// February 15, 2026
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
}

// =====================
// GLOBAL VARIABLES
// =====================

// Snowman position
let snowmanX = 300;
let snowmanY = 320;

// Background state variable (4 states: 0,1,2,3)
let currentBack = 0;


// =====================
// SETUP
// =====================
function setup() {
  createCanvas(800, 500);
}


// =====================
// MAIN DRAW LOOP
// =====================
function draw() {
  drawBackground();
  drawGround();
  drawSun();
  drawSnowman();
  drawName();
}


// =====================
// BACKGROUND STATES
// =====================
function drawBackground() {

  if (currentBack === 0) {
    background(135, 206, 235); // Day (light blue)
  }
  else if (currentBack === 1) {
    background(100, 149, 237); // Evening
  }
  else if (currentBack === 2) {
    background(40, 60, 120); // Night
  }
  else if (currentBack === 3) {
    background(200, 220, 255); // Snow storm sky
  }
}


// =====================
// GROUND
// =====================
function drawGround() {
  fill(255);
  rect(0, 350, width, 150); // Snow ground
}


// =====================
// SUN (Mouse Interaction)
// =====================
function drawSun() {
  fill(255, 204, 0);
  ellipse(mouseX, mouseY, 80, 80); // Sun follows mouse
}


// =====================
// SNOWMAN (Protagonist)
// =====================
function drawSnowman() {

  fill(255);

  // Bottom body
  ellipse(snowmanX, snowmanY, 80, 80);

  // Middle body
  ellipse(snowmanX, snowmanY - 60, 60, 60);

  // Head
  ellipse(snowmanX, snowmanY - 110, 50, 50);

  // Eyes
  fill(0);
  ellipse(snowmanX - 10, snowmanY - 115, 5, 5);
  ellipse(snowmanX + 10, snowmanY - 115, 5, 5);

  // Arms
  line(snowmanX - 30, snowmanY - 60,
       snowmanX - 60, snowmanY - 80);

  line(snowmanX + 30, snowmanY - 60,
       snowmanX + 60, snowmanY - 80);
}


// =====================
// KEYBOARD CONTROLS
// =====================
function keyPressed() {

  // Move snowman
  if (keyCode === LEFT_ARROW) {
    snowmanX -= 10;
  }

  if (keyCode === RIGHT_ARROW) {
    snowmanX += 10;
  }

  if (keyCode === UP_ARROW) {
    snowmanY -= 10;
  }

  if (keyCode === DOWN_ARROW) {
    snowmanY += 10;
  }

  // Reset position
  if (key === 'r' || key === 'R') {
    snowmanX = 300;
    snowmanY = 320;
  }
}


// =====================
// MIDDLE MOUSE CLICK
// =====================
function mousePressed() {

  if (mouseButton === CENTER) {

    currentBack++;

    if (currentBack > 3) {
      currentBack = 0;
    }
  }
}


// =====================
// NAME DISPLAY
// =====================
function drawName() {
  fill(0);
  textSize(16);
  text("Abdullah Baig", 10, height - 10);
}
