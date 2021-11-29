// Animation Intro

// Set up canvas and graphics context
let cnv = document.getElementById("myCanvas");
let ctx = cnv.getContext("2d");
cnv.width = 600;
cnv.height = 400;

// Global Variables
let rectX = 100;


setInterval(loop, 20);

function loop() {
    console.log("hi");
    // Draw a square
    ctx.fillStyle = "orange";
    ctx.fillRect(100, 150, 80, 80);
}

// 7:37 - Animation Basics