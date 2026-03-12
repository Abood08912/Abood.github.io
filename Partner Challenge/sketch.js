// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let boxX = 0;
let boxY = 0;
let side = 0; // 0 - top, 1 - right side, 2, - bottom, 3 - left
let movementSpeed = 100;
let boxSize = 20;

function setup() {
  createCanvas(400, 400);
  setTimeout(moveBox, movementSpeed);
}

function moveBox(){
  if (boxX === width - boxSize && side === 0){
    side = 1;
  }
  if (boxY === width - boxSize && side === 1){
    side = 2;
  }  
  if (boxX === boxSize - boxSize && side === 2){
    side = 3;
  }
  if (boxX === 0 && boxY === 0){
    side = 0;
  }  

  // failsafe
  if (boxX > width){
    boxX = width - boxSize * 2
  }
  if (boxY > height){
    boxY = height - boxSize *2
  }
  if (boxX < 0){
    boxX = boxSize *2
  }
  if (boxY < 0){
    boxY = boxSize *2
  }

  switch(side){
    case 0:
      boxX += boxSize;
      break;
    case 1:
      boxY += boxSize;
      break;
    case 2:
      boxX -= boxSize;
      break;
    case 3:
      boxY -= boxSize;
      break;
  }

  setTimeout(moveBox, movementSpeed);
}

function drawMovingSquare(){
  rect(boxX,boxY, boxSize,boxSize)
}

function keyPressed(){
  switch(keyCode){
    case 65: // a
      boxSize += 10;
      break;
    case 68: //d
      boxSize -= 10;
      break;
    case 87: // w
      movementSpeed -= 10;
      break;
    case 83:
      movementSpeed += 10;
      break;
  }
}

function draw() {
  background(220);
  console.log(keyCode)
  drawMovingSquare()
}
