"use strict";
import {
  traerDatos,
  traerInterpretes,
  insertarMensajeError,
  construirJsonAPI,
  validarFormulario,
  construirJsonFormulario
} from "./biblioteca.js";
window.onload = () => {
  const contenedorErrores = document.getElementById("contenedorErrores");
  const formulario = document.forms.formularioPersonaje;

  let objetoJSON = [];

  formulario.addEventListener(
    "click",
    (evento) => {
      if (evento.target.id === "btnEnviar") {
        evento.preventDefault();
        // Si pasa la validación, se construye el objeto JSON nuevo con la info del formulario y se añade a la variable global "objetoJSON"
        if (validarFormulario(formulario, contenedorErrores)) {
          const objetoForm = construirJsonFormulario(formulario);
          objetoJSON = [...objetoJSON, objetoForm];
          console.log(objetoJSON);
        }
      }
    },
    false
  );

  const Interpretes = async () => {
    try {
      const datosInterpretes = await traerInterpretes();
      objetoJSON = datosInterpretes.map((interprete) =>
        construirJsonAPI(interprete)
      );
    } catch (error) {
      insertarMensajeError(contenedorErrores, error.message);
    }
  };

  Interpretes();
};
