"use strict";
import {mostrar,ocultar,AnyadirEventos} from "./biblioteca.js";
window.onload = () => {

  //Ejercicio1:

  // Al principio he intentado hacerlo con .getElementsByTagName(), pero, no me los seleccionaba respetando su posición
  // es decir, seleccionaba primero los h1 y luego los p, y luego a la hora de hacer la funcion "AnyadirEventos()" no funcionaba como esperaba.
  /*let elementosh1 = document.getElementsByTagName("h1");*/

  let elementosp = document.getElementsByTagName("p");

  let contenido = document.querySelectorAll("h1, p");

  ocultar(elementosp);
  AnyadirEventos(contenido);
};
