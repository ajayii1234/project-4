// Ensure these declarations are only present once in the script.ts file
var _a, _b;
// Get the canvas element and its context
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
// Define some variables for the shapes (declared only once)
var isCircle = false;
var isRectangle = false;
var drawing = false; // To track if we're drawing
// Variables to track mouse position and shape dimensions
var startX = 0;
var startY = 0;
var currentX = 0;
var currentY = 0;
// Draw a circle on the canvas
function drawCircle(x, y, radius) {
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, 2 * Math.PI);
    ctx.fillStyle = 'rgba(0, 150, 255, 0.5)'; // Light blue fill
    ctx.fill();
    ctx.strokeStyle = 'blue';
    ctx.lineWidth = 2;
    ctx.stroke();
}
// Draw a rectangle on the canvas
function drawRectangle(x, y, width, height) {
    ctx.beginPath();
    ctx.rect(x, y, width, height);
    ctx.fillStyle = 'rgba(255, 99, 132, 0.5)'; // Light red fill
    ctx.fill();
    ctx.strokeStyle = 'red';
    ctx.lineWidth = 2;
    ctx.stroke();
}
// Event listener for mouse down to start drawing
canvas.addEventListener('mousedown', function (e) {
    drawing = true;
    startX = e.offsetX;
    startY = e.offsetY;
    currentX = startX;
    currentY = startY;
});
// Event listener for mouse move to update drawing in real time
canvas.addEventListener('mousemove', function (e) {
    if (drawing) {
        currentX = e.offsetX;
        currentY = e.offsetY;
        ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas for real-time update
        if (isCircle) {
            var radius = Math.sqrt(Math.pow(currentX - startX, 2) + Math.pow(currentY - startY, 2));
            drawCircle(startX, startY, radius); // Draw circle as you move the mouse
        }
        else if (isRectangle) {
            var width = currentX - startX;
            var height = currentY - startY;
            drawRectangle(startX, startY, width, height); // Draw rectangle as you move the mouse
        }
    }
});
// Event listener for mouse up to stop drawing
canvas.addEventListener('mouseup', function () {
    drawing = false;
});
// Event listeners for buttons to toggle drawing mode
(_a = document.getElementById('circleButton')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', function () {
    isCircle = true;
    isRectangle = false; // Ensure only one shape is active
});
(_b = document.getElementById('rectangleButton')) === null || _b === void 0 ? void 0 : _b.addEventListener('click', function () {
    isRectangle = true;
    isCircle = false; // Ensure only one shape is active
});
