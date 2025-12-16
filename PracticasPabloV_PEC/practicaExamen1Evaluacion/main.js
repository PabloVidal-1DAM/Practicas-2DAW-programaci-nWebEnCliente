"use strict";
import {
  traerDatos,
  traerInterpretes,
  insertarMensajeError,
  construirJsonAPI,
  validarFormulario,
  construirJsonFormulario,
  insertarMensajeInfo,
  crearDivMostrarInfo,
} from "./biblioteca.js";
window.onload = () => {
  const contenedorErrores = document.getElementById("contenedorErrores");
  const formulario = document.forms.formularioPersonaje;

  const h1 = document.getElementsByTagName("h1");

  let objetoJSON = [];

  crearDivMostrarInfo();

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
          contenedorErrores.classList.add("ocultar");

          insertarMensajeInfo(h1, "Información introducida corectamente");

          formulario.reset();
        }
      }

      if (evento.target.id === "mostrarInfo"){
        // Aquí se mostrará la información de la variable global
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
