"use strict";
import {
  verificarInfo,
  mostrarInfo
} from "./biblioteca.js";

window.onload = () => {
  const formulario = document.forms.formularioDiscos;

  let objetoJSON = [];


  const btnEnviar = document.getElementById("enviar");

  btnEnviar.addEventListener("click", () =>{
     objetoJSON = verificarInfo(formulario, objetoJSON);
     console.log(objetoJSON);
  }, false);

  const btnMostar = document.getElementById("mostrar");
  btnMostar.addEventListener("click", () => mostrarInfo(objetoJSON), false);


  
}; // Fin del window onload.
