"use strict";
let botones = document.getElementsByTagName("button");
let contenedores = document.getElementsByTagName("div");
let contenido = document.querySelectorAll("h1, p")

const mostrarContenido = (posicionTitulo, posicionTexto) =>{
    contenido.item(posicionTitulo).classList.toggle("oculto");
    contenido.item(posicionTexto).classList.toggle("oculto");
}

botones.item(0).addEventListener("click", () =>mostrarContenido(0,1), false);

console.log(botones);
console.log(contenedores);
console.log(contenido);