"use strict";
let botones = document.getElementsByTagName("button");
let contenedores = document.getElementsByTagName("div");

const mostrarContenido = (posicion) =>{
    contenedores.item(1).classList.remove("oculto");
    contenedores.item(posicion).classList.toggle("oculto");
}


for(let i = 0; i< botones.length; i++){
    let posicionSegundaPestanya =  i + 2;
    botones.item(i).addEventListener("click", () =>mostrarContenido(posicionSegundaPestanya), false);
}
