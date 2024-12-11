const TITLE1 = document.getElementById("console1");
const TITLE2 = document.getElementById("console2");
const TITLE3 = document.getElementById("console3");
const TITLE4 = document.getElementById("console4");
const TITLE5 = document.getElementById("console5");
const TITLE6 = document.getElementById("console6");
const TITLE7 = document.getElementById("console7");

let ejemplo1 = 2 ** 3;
TITLE1.innerText = ejemplo1;

ejemplo1 += 5;
TITLE2.innerText = ejemplo1;

let ejemploA = "Soy un texto.";
let ejemploB = " Y yo otro texto.";
let ejemploC = ejemploA + ejemploB;
TITLE3.innerText = ejemploC;

let ejemplo2 = 30;
let booleano1 = ejemplo1 > ejemplo2;
TITLE4.innerText = booleano1;

TITLE5.innerText = typeof ejemplo1;
TITLE6.innerText = typeof booleano1;

let booleano2 = typeof ejemplo1 == typeof ejemplo2;
TITLE7.innerText = booleano2;