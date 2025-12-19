"use strict";
import {
  traerDatos,
  insertarMensajeError,
  construirJsonAPI,
  validarFormulario,
  construirJsonFormulario,
  insertarMensajeInfo,
  crearDivMostrarInfo,
  guardarDatosLocal,
  recuperarDatosLocal,
  crearbtnVerInfo,
  printObjetoJSON,
  borrarInterprete,
} from "./biblioteca.js";
window.onload = () => {
  const contenedorErrores = document.getElementById("contenedorErrores");
  
  let objetoJSON = [];

  // Si al llamar al localStorage.getItem() hay chicha, se le ponen a ObjetoJSON
  const datosLocales = recuperarDatosLocal();
  if (datosLocales !== null) {
    objetoJSON = datosLocales;
  }

  const Interpretes = async () => {
    try {
      // Quiere decir que no tiene chicha pasada del LocalStorage
      if (!objetoJSON.length) {
        // La primera vez solo devuelve mas endpoints a los que consultar.
        const endpoints = await traerDatos("https://swapi.py4e.com/api/");

        // Por lo que es necesario volver a llamarla con el endpoint que se quiere consultar, en este caso el de personas.
        const datos = await traerDatos(endpoints.people);
        objetoJSON = datos.map(async(interprete) => await construirJsonAPI(interprete));

        guardarDatosLocal(objetoJSON);
      }
    } catch (error) {
      insertarMensajeError(contenedorErrores, error.message);
    }
  };

  Interpretes();


  const formulario = document.forms.formularioPersonaje;

  const h1 = document.body.firstElementChild;

  crearDivMostrarInfo();

  const ultimobtnForm = document.querySelector("form").lastElementChild;
  crearbtnVerInfo(ultimobtnForm);

  const divMostrarInfo = document.body.lastElementChild;

  formulario.addEventListener(
    "click",
    (evento) => {
      if (evento.target.tagName === "BUTTON") {
        evento.preventDefault();
      }

      if (evento.target.id === "btnEnviar") {
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

      if (evento.target.id === "mostrarContenido") {
        // Hacer print al objeto ObjetoJSON, además de añadir boton de borrado por cada objeto mostrado.
        printObjetoJSON(objetoJSON, divMostrarInfo);
      }
    },
    false
  );

  const divInfo = document.getElementById("mostrarInfo");

  if (divInfo !== null) {
    divInfo.addEventListener(
      "click",
      (evento) => {
        if (evento.target.textContent === "Borrar") {
          // llamada a la función que borra de la variable global el interprete seleccionado por su id.
          const id = evento.target.parentNode.id;
          objetoJSON = borrarInterprete(id, objetoJSON);
          guardarDatosLocal(objetoJSON);
          printObjetoJSON(objetoJSON, divMostrarInfo);
          insertarMensajeInfo(h1, "Se ha borrado el Interprete correctamente.");
        }
      },
      false
    );
  }
};
