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
       this.x = Math.random() * window.innerWidth;
       this.y = Math.random() * window.innerHeight;
       this.speed = {
           x: Math.random() * 1.4,
           y: 3
       }
   }

   checkDirection() {
       if (this.x >= window.innerWidth) {
           this.speed.x = this.speed.x * -1;
       } else if (this.x <= 0) {
           this.speed.x = this.speed.x * -1
       }

       if (this.y >= window.innerHeight) {
           this.speed.y = this.speed.y * -1;
       } else if (this.y <= 0) {
           this.speed.y = this.speed.y * -1;
       }
   }

   updatePosition() {
       this.checkDirection();
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

let misCirculos = [];

const TOTAL_CIRCULOS = 50;
for (let i = 0; i < TOTAL_CIRCULOS; i++) {
   let nuevoCirculo = new Circulo();
   misCirculos.push(nuevoCirculo);
}

function render() {
   CTX.clearRect(0, 0, CANVAS.width, CANVAS.height);

   for (let i = 0; i < misCirculos.length; i++) {
       misCirculos[i].draw();
   }

   requestAnimationFrame(render);
}

window.addEventListener("resize", updateCanvasSize);
requestAnimationFrame(render);