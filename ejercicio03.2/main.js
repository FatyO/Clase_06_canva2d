const PI2 = Math.PI * 2;
const CANVAS = document.getElementById("lienzo");
const CTX = CANVAS.getContext("2d");
CANVAS.width = window.innerWidth;
CANVAS.height = window.innerHeight;

function updateCanvasSize() {
    CANVAS.width = CANVAS.getBoundingClientRect().width;
    CANVAS.height = CANVAS.getBoundingClientRect().height;
}

class Circulo {
    constructor(params = {}) {
        this.borderColor = params.borderColor || "aqua";
        this.borderWidth = 4;
        this.x = Math.random() * 200;
        this.y = Math.random() * 200;
        this.speed = {
            x: Math.random() * 0.7,
            y: 0.3
        }
    }
    
    updatePosition() {
        this.x += this.speed.x;
        this.y += this.speed.y;
    }

    draw() {
        CTX.strokeStyle = this.borderColor;
        CTX.lineWidth = this.borderWidth;
        CTX.beginPath();
        CTX.ellipse(this.x, this.y, 30, 30, 0, 0, PI2);
        CTX.closePath();
        CTX.stroke();

        this.updatePosition();
    };
}

let circulo1 = new Circulo();

let misCirculos = [];

for (let i = 0; i < 7; i++) {
    let nuevoCirculo = new Circulo({ borderColor: "purple" });
    misCirculos.push(nuevoCirculo);
}

misCirculos[2].borderColor = "white"

function render() {
    CTX.clearRect(0, 0, CANVAS.width, CANVAS.height);

    for (let i = 0; i < misCirculos.length; i++) {
        misCirculos[i].draw();
    }

    circulo1.draw();

    requestAnimationFrame(render);
}

window.addEventListener("resize", updateCanvasSize);
requestAnimationFrame(render);