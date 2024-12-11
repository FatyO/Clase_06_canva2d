let screenThreshold = 800;
let upperScreenThreshold = 1200;

const DIV = document.getElementById("tester");

function isWindowWideEnough(event) {
    if (window.innerWidth >= upperScreenThreshold) {
        DIV.style.borderColor = "blue";
    } else if (window.innerWidth >= screenThreshold) {
        DIV.style.borderColor = "#00ff00";
    } else {
        DIV.style.borderColor = "blue";
    }
}

window.addEventListener("resize", isWindowWideEnough);