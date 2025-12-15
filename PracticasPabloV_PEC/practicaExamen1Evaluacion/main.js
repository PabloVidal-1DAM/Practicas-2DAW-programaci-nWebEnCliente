"use strict";
import { traerDatos, traerInterpretes, insertarMensajeError, construirObjeto } from "./biblioteca.js";
window.onload = () => {
  const contenedorErrores = document.getElementById("contenedorErrores");
  const formulario = document.getElementById("formularioPersonaje");

  let objetoJSON = [];

  formulario.addEventListener(
    "click",
    (evento) => {
      if (evento.target.id === "btnEnviar") {
        evento.preventDefault();
        console.log(objetoJSON)
      }
    },
    false
  );

  const Interpretes = async() => {
    try{
        const datosInterpretes = await traerInterpretes();
        objetoJSON = datosInterpretes.map((interprete) => construirObjeto(interprete));
    }catch(error){
        insertarMensajeError(contenedorErrores, error.message);
    }
  };

  Interpretes();
};
