const PI2 = Math.PI * 2;
const CANVAS = document.getElementById("lienzo");
const CTX = CANVAS.getContext("2d");
CANVAS.width = window.innerWidth;
CANVAS.height = window.innerHeight;

function updateCanvasSize() {
    CANVAS.width = CANVAS.getBoundingClientRect().width;
    CANVAS.height = CANVAS.getBoundingClientRect().height;
}

let circulo = {
    borderColor: "#00ff99",
    borderWidth: 4,
    x: 0,
    y: 0,
    speed: {
        x: 0.7,
        y: 0.3
    },

    updatePosition: function() {
        this.x += this.speed.x;
        this.y += this.speed.y;
    },

    draw: function() {
        CTX.strokeStyle = this.borderColor;
        CTX.lineWidth = this.borderWidth;
        CTX.beginPath();
        CTX.ellipse(this.x, this.y, 30, 30, 0, 0, PI2);
        CTX.closePath();
        CTX.stroke();

        this.updatePosition();
    }
};

function render() {
    CTX.clearRect(0, 0, CANVAS.width, CANVAS.height);
    circulo.draw();
    requestAnimationFrame(render);
}

window.addEventListener("resize", updateCanvasSize);
requestAnimationFrame(render);
