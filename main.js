// Animation Intro

// Set up canvas and graphics context
let cnv = document.getElementById("myCanvas");
let ctx = cnv.getContext("2d");
cnv.width = 600;
cnv.height = 400;

// Global Variables
let rectX = 100;
let rectSize = 80;
let rectBlue = 255;
let rectRed = 0;
let mouseIsPressed = false;

// Main Program Loop (60 FPS)
requestAnimationFrame(loop);

function loop() {
    // Update Variables

    if (mouseIsPressed) {
        rectX += 1;
        rectBlue--;
        rectSize += Math.random() * 2 - 1; // -1 to 1
        rectRed++;
    }


    // Draw a background
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, cnv.width, cnv.height);

    // Draw a square
    ctx.fillStyle = "rgb(" + rectRed + ", 0, " + rectBlue + ")";
    ctx.fillRect(rectX, 150, rectSize, rectSize);

    requestAnimationFrame(loop);
}

// Event Stuff
document.addEventListener("mousedown", mouseDownHandler)