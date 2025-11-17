"use strict";
import {
  guardarInfo,
  validarCampoTexto,
  validarFecha,
  validarLocalizacion,
  validarTipoMusica,
  verificarInfo,
} from "./biblioteca.js";

window.onload = () => {
  const formulario = document.forms.formularioDiscos;

  let objetoJSON = [];


  let btnEnviar = document.getElementById("enviar");
  btnEnviar.addEventListener("click", () => verificarInfo(formulario, objetoJSON), false);
}; // Fin del window onload.
