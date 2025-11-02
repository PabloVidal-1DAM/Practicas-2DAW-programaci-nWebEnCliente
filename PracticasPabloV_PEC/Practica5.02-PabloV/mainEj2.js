"use strict";
import { mostrarContenido } from "./bibliotecaEj2.js";

window.onload = () => {
  // Se seleccionan del DOM los botones que harán los eventos y los contenedores que tienen la información a mostrar y/o ocultar.
  let botones = document.getElementsByTagName("button");
  let contenedores = document.getElementsByTagName("div");

  for (let i = 0; i < botones.length; i++) {
    // Los div que contienen la información a mostrar empiezan en la posición 2,
    // por lo que se le suma al indice 2 posiciones para saltarse los divs que no interesan.
    let posicionSegundaPestanya = i + 2;

    // Se asigna el evento a los botones y la acción que hacen es una función externa llamada mostrarConenido().
    botones.item(i).addEventListener("click",() => mostrarContenido(contenedores, posicionSegundaPestanya),false);
  }
}; // Fin del window onload.
