// Ensure these declarations are only present once in the script.ts file

// Get the canvas element and its context
const canvas = document.getElementById('canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d')!;

// Define some variables for the shapes (declared only once)
let isCircle: boolean = false;
let isRectangle: boolean = false;
let drawing: boolean = false; // To track if we're drawing

// Variables to track mouse position and shape dimensions
let startX: number = 0;
let startY: number = 0;
let currentX: number = 0;
let currentY: number = 0;

// Draw a circle on the canvas
function drawCircle(x: number, y: number, radius: number) {
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, 2 * Math.PI);
    ctx.fillStyle = 'rgba(0, 150, 255, 0.5)'; // Light blue fill
    ctx.fill();
    ctx.strokeStyle = 'blue';
    ctx.lineWidth = 2;
    ctx.stroke();
}

// Draw a rectangle on the canvas
function drawRectangle(x: number, y: number, width: number, height: number) {
    ctx.beginPath();
    ctx.rect(x, y, width, height);
    ctx.fillStyle = 'rgba(255, 99, 132, 0.5)'; // Light red fill
    ctx.fill();
    ctx.strokeStyle = 'red';
    ctx.lineWidth = 2;
    ctx.stroke();
}

// Event listener for mouse down to start drawing
canvas.addEventListener('mousedown', (e) => {
    drawing = true;
    startX = e.offsetX;
    startY = e.offsetY;
    currentX = startX;
    currentY = startY;
});

// Event listener for mouse move to update drawing in real time
canvas.addEventListener('mousemove', (e) => {
    if (drawing) {
        currentX = e.offsetX;
        currentY = e.offsetY;
        ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas for real-time update

        if (isCircle) {
            const radius = Math.sqrt(Math.pow(currentX - startX, 2) + Math.pow(currentY - startY, 2));
            drawCircle(startX, startY, radius); // Draw circle as you move the mouse
        } else if (isRectangle) {
            const width = currentX - startX;
            const height = currentY - startY;
            drawRectangle(startX, startY, width, height); // Draw rectangle as you move the mouse
        }
    }
});

// Event listener for mouse up to stop drawing
canvas.addEventListener('mouseup', () => {
    drawing = false;
});

// Event listeners for buttons to toggle drawing mode
document.getElementById('circleButton')?.addEventListener('click', () => {
    isCircle = true;
    isRectangle = false; // Ensure only one shape is active
});

document.getElementById('rectangleButton')?.addEventListener('click', () => {
    isRectangle = true;
    isCircle = false; // Ensure only one shape is active
});
