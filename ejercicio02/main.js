
for (let index = 0; index < 50; index++) {
    const DOM_ELEMENT = document.createElement("h1");
    DOM_ELEMENT.innerText = `Element index: ${index}`;
    document.body.appendChild(DOM_ELEMENT);
}


let saludo = "HOLA, BUENAS TARDES"

const DOM_ELEMENT_2 = document.createElement("p");
DOM_ELEMENT_2.innerText = saludo;
document.body.appendChild(DOM_ELEMENT_2);

const DOM_ELEMENT_3 = document.createElement("p");
DOM_ELEMENT_3.innerText = `saludo.length (o cantidad de caracteres): ${saludo.length}`;
document.body.appendChild(DOM_ELEMENT_3);

while (saludo.length < 20) {
    saludo += "a";
}


const DOM_ELEMENT_4 = document.createElement("p");
DOM_ELEMENT_4.innerText = saludo;
document.body.appendChild(DOM_ELEMENT_4);

const DOM_ELEMENT_5 = document.createElement("p");
DOM_ELEMENT_5.innerText = `saludo.length (o cantidad de caracteres) después de modificarla en el ciclo while: ${saludo.length}`;
document.body.appendChild(DOM_ELEMENT_5);