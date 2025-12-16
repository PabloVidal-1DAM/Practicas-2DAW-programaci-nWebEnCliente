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
  guardarDatosLocal,
  recuperarDatosLocal,
  crearbtnVerInfo,
} from "./biblioteca.js";
window.onload = () => {
  const contenedorErrores = document.getElementById("contenedorErrores");
  const formulario = document.forms.formularioPersonaje;

  const h1 = document.getElementsByTagName("h1");

  let objetoJSON = [];

  const datosLocales = recuperarDatosLocal();
  if(datosLocales!== null){
    objetoJSON = datosLocales;
  }

  console.log(objetoJSON);

  crearDivMostrarInfo();

  const ultimobtnForm = document.querySelector("form").lastElementChild;
  crearbtnVerInfo(ultimobtnForm);

  const divMostrarInfo = document.body.lastElementChild;

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

          guardarDatosLocal(objetoJSON);
          insertarMensajeInfo(
            h1,
            "Información guardada correctamente en LocalHost."
          );

          contenedorErrores.classList.add("ocultar");

          formulario.reset();
        }
      }

      if(evento.target.id === "mostrarContenido"){
        // Hacer print al objeto ObjetoJSON, además de añadir boton de borrado por cada objeto mostrado.
      }

      if (evento.target.id === "mostrarInfo") {
        // Aquí se mostrará la información de la variable global
      }
    },
    false
  );

  const Interpretes = async () => {
    try {
      // Quiere decir que no tiene info pasada del LocalStorage
      if (!objetoJSON.length) {
        const datosInterpretes = await traerInterpretes();
        objetoJSON = datosInterpretes.map((interprete) =>
          construirJsonAPI(interprete)
        );

        guardarDatosLocal(objetoJSON);
      }
    } catch (error) {
      insertarMensajeError(contenedorErrores, error.message);
    }
  };

  Interpretes();
};
