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
       this.borderColor = params.borderColor || "#6ec3e6";
       this.fillColor = "#6ec3e6"; 
       this.borderWidth = 1;
       this.radiusX = 50;
       this.radiusY = 50;
       this.width = this.radiusX * 2;
       this.height = this.radiusY * 2;
       this.distanceX = 10;
       this.distanceY = 10;
       this.x = params.x || this.radiusX;
       this.y = params.y || this.radiusY;
       this.row = params.row || 0;
       this.col = params.col || 0;
   }

   draw(fill) {
       CTX.strokeStyle = this.borderColor;
       CTX.lineWidth = this.borderWidth;
       CTX.beginPath();
       CTX.ellipse(this.x, this.y, this.radiusX, this.radiusY, 0, 0, PI2);
       CTX.closePath();

       if (fill) {
           CTX.fillStyle = this.fillColor;
           CTX.fill();
       }
       CTX.stroke();
   }
}

let listaDeCirculos = [];

function createGrid() {
   listaDeCirculos = [];
   const circleSize = 100;
   const spacing = 10;
   const totalSize = circleSize + spacing;
   
   const columnas = Math.floor(CANVAS.width / totalSize);
   const filas = Math.floor(CANVAS.height / totalSize);

   for (let col = 0; col < columnas; col++) {
       for (let row = 0; row < filas; row++) {
           const x = col * totalSize + circleSize/2 + spacing;
           const y = row * totalSize + circleSize/2 + spacing;
           
           const nuevoCirculo = new Circulo({
               x: x,
               y: y,
               row: row,
               col: col
           });
           
           listaDeCirculos.push(nuevoCirculo);
       }
   }
}

function render() {
   CTX.clearRect(0, 0, CANVAS.width, CANVAS.height);
   
   listaDeCirculos.forEach((circulo) => {
       const shouldFill = (circulo.row + circulo.col) % 2 === 0;
       circulo.draw(shouldFill);
   });

   requestAnimationFrame(render);
}

window.addEventListener("resize", () => {
   updateCanvasSize();
   createGrid();
});

createGrid();
requestAnimationFrame(render);