const PI2 = Math.PI * 2;
const CANVAS = document.getElementById("lienzo");
const CTX = CANVAS.getContext("2d");
CANVAS.width = window.innerWidth;
CANVAS.height = window.innerHeight;

function updateCanvasSize() {
    CANVAS.width = CANVAS.getBoundingClientRect().width;
    CANVAS.height = CANVAS.getBoundingClientRect().height;
}

function renderCircleRed(x, y) {
    CTX.fillStyle = "#ff0000";
    CTX.beginPath();
    CTX.ellipse(x, y, 15, 15, 0, 0, PI2);
    CTX.fill();
}

function renderCircleGreen(x, y) {
    CTX.fillStyle = "#00ff00";
    CTX.beginPath();
    CTX.ellipse(x, y, 15, 15, 0, 0, PI2);
    CTX.fill();
}

let redCircleX = 0;
let greenCircleX = 0;
let whileCounter = 0;

function frame() {
    CTX.clearRect(0, 0, CANVAS.width, CANVAS.height);
    
    for (let i = 0; i < 10; i++) {
        redCircleX = i * 35;
        renderCircleRed(redCircleX, 35);
    }
    
    whileCounter = 0;
    greenCircleX = 0;
    
    while (greenCircleX < window.innerWidth) {
        greenCircleX = whileCounter * 60;
        renderCircleGreen(greenCircleX, 90);
        whileCounter++;
    }
    
    requestAnimationFrame(frame);
}

window.addEventListener("resize", updateCanvasSize);
requestAnimationFrame(frame);