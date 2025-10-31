"use strict";
let botones = document.getElementsByTagName("button");
let contenedores = document.getElementsByTagName("div");
let contenido = document.querySelectorAll("h1, p")

const mostrarContenido = (posicionTitulo, posicionTexto) =>{
    contenedores.item(1).classList.remove("oculto");
    contenido.item(posicionTitulo).classList.toggle("oculto");
    contenido.item(posicionTexto).classList.toggle("oculto");
}

for(let i = 0; i< botones.length; i++){
    botones.item(i).addEventListener("click", () =>mostrarContenido(i, i + 1), false);
}