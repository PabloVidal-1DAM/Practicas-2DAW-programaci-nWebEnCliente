import {mostrar,ocultar,AnyadirEventos} from "./biblioteca.js";
window.onload = () => {
  let elementosh1 = document.getElementsByTagName("h1");
  let elementosp = document.getElementsByTagName("p");

  let contenido = [...elementosh1, ...elementosp];
  console.log(contenido);

  ocultar(elementosp);
  AnyadirEventos(contenido);

};
