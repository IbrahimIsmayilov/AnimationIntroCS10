// Animation Intro

// Set up canvas and graphics context
let cnv = document.getElementById("myCanvas");
let ctx = cnv.getContext("2d");
cnv.width = 600;
cnv.height = 400;

// Global Variables
let rectX = 300;
let rectSize = 80;

// Main Program Loop (60 FPS)
requestAnimationFrame(loop);
function loop() {
    // Update Variables
    rectX += Math.random() * 10 - 5; // -5 to 5
    rectSize += Math.random() * 2 - 1; // -1 to 1

    // Draw a background
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, cnv.width, cnv.height);

    // Draw a square
    ctx.fillStyle = "rgb(0, 0," + 255 + ")";
    ctx.fillRect(rectX, 150, rectSize, rectSize);

    requestAnimationFrame(loop);
}
