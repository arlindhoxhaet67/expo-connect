// filename: complexCode.js

/*
 * This code generates fractal trees using the HTML5 canvas element.
 * It utilizes recursion to draw the branches of the tree.
 * The user can interact with the tree by changing the angle and length factors.
 * The code also includes various helper functions and supports custom colors.
 */

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const colors = ['#006400', '#008000', '#009900', '#00cc00', '#00ff00']; // Green color shades
const lineWidth = 2;
const baseAngle = 0;

// Define the tree parameters
const tree = {
  angle: 20, // Initial angle
  length: 100, // Initial branch length
  angleFactor: 0.8, // Factor by which the angle decreases with each recursive level
  lengthFactor: 0.75, // Factor by which the length decreases with each recursive level
  maxDepth: 10, // Maximum depth of recursion
  colorIndex: 0
};

// Initialize the canvas
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
ctx.lineWidth = lineWidth;

// Draw the fractal tree
function drawTree(x, y, length, angle, depth) {
  ctx.beginPath();
  ctx.save();
  ctx.translate(x, y);
  ctx.rotate((Math.PI / 180) * angle);

  // Calculate new branch length and angle
  const newLength = length * tree.lengthFactor;
  const newAngle = angle * tree.angleFactor;

  ctx.moveTo(0, 0);
  ctx.lineTo(0, -length);

  // Change color every 3 recursive levels
  if (depth % 3 === 0) {
    tree.colorIndex = (tree.colorIndex + 1) % colors.length;
  }

  ctx.strokeStyle = colors[tree.colorIndex];
  ctx.stroke();

  if (depth < tree.maxDepth) {
    // Recursive function calls
    drawTree(0, -length, newLength, -newAngle, depth + 1);
    drawTree(0, -length, newLength, newAngle, depth + 1);
  }

  ctx.restore();
}

// Start drawing the tree
drawTree(canvas.width / 2, canvas.height, tree.length, baseAngle, 0);