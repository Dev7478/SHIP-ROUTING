// // script.js

// // JavaScript for Iceberg and Ship Collision Simulation

// const canvas = document.getElementById('simulationCanvas');
// const ctx = canvas.getContext('2d');

// let shipX = 100;
// let shipY = 150;
// let icebergX = 600;
// let icebergY = 150;

// // Function to draw the ship
// function drawShip() {
//   ctx.fillStyle = '#0000FF'; // Blue ship
//   ctx.fillRect(shipX, shipY, 100, 50);
// }

// // Function to draw the iceberg
// function drawIceberg() {
//   ctx.fillStyle = '#00FFFF'; // Cyan iceberg
//   ctx.beginPath();
//   ctx.moveTo(icebergX, icebergY);
//   ctx.lineTo(icebergX + 100, icebergY + 50);
//   ctx.lineTo(icebergX, icebergY + 100);
//   ctx.closePath();
//   ctx.fill();
// }

// // Function to clear the canvas
// function clearCanvas() {
//   ctx.clearRect(0, 0, canvas.width, canvas.height);
// }

// // Function to update positions
// function updatePositions() {
//   shipX += 2; // Move ship to the right
//   icebergX -= 1; // Move iceberg to the left

//   if (shipX + 100 >= icebergX && shipY === icebergY) {
//     alert('Collision Detected!');
//     shipX = 100; // Reset ship position
//     icebergX = 600; // Reset iceberg position
//   }
// }

// // Main animation loop
// function animate() {
//   clearCanvas();
//   drawShip();
//   drawIceberg();
//   updatePositions();
//   requestAnimationFrame(animate);
// }

// // Start the animation
// animate();

// script.js

// Get the canvas element and context
const canvas = document.getElementById('simulationCanvas');
const ctx = canvas.getContext('2d');

// Load images
const shipImg = new Image();
const icebergImg = new Image();

shipImg.src = 'ship-removebg-preview.png';  // Path to your ship image
icebergImg.src = 'iceberg-removebg-preview.png';  // Path to your iceberg image

let shipX = 100;
let shipY = 150;
let icebergX = 600;
let icebergY = 150;

// Draw the ship image
function drawShip() {
  ctx.drawImage(shipImg, shipX, shipY, 100, 50);  // Adjust size as needed
}

// Draw the iceberg image
function drawIceberg() {
  ctx.drawImage(icebergImg, icebergX, icebergY, 100, 100);  // Adjust size as needed
}

// Function to clear the canvas
function clearCanvas() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

// Function to update positions
function updatePositions() {
  shipX += 2; // Move ship to the right
  icebergX -= 1; // Move iceberg to the left

  if (shipX + 100 >= icebergX && shipY === icebergY) {
    alert('Collision Detected!');
    shipX = 100; // Reset ship position
    icebergX = 600; // Reset iceberg position
  }
}

// Main animation loop
function animate() {
  clearCanvas();
  drawShip();
  drawIceberg();
  updatePositions();
  requestAnimationFrame(animate);
}

// Start the animation after images have loaded
shipImg.onload = icebergImg.onload = function() {
  animate();
};
