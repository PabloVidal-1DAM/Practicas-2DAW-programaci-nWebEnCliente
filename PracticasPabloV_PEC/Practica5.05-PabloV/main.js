"use strict";
import {
  validarFormulario,
  mostrarInfo,
  filtrarInfo,
  borrarDato,
  guardarDatosLocal,
} from "./biblioteca.js";

window.onload = () => {
  const formulario = document.forms.formularioDiscos;
  const contenedorPrincipal = document.getElementById("app");

  const contenedorErrores = document.getElementById("errores");
  const contenedorInfo = document.getElementById("informacion");

  const datosRescatados = localStorage.getItem("infoDisco");
  let objetoJSON = datosRescatados ? JSON.parse(datosRescatados) : [];

  if (objetoJSON.length > 0) {
    mostrarInfo(objetoJSON, contenedorInfo);
  }

  contenedorPrincipal.addEventListener(
    "click",
    (evento) => {
      const id = evento.target.id;

      if (id === "enviar") {
        objetoJSON = validarFormulario(
          formulario,
          objetoJSON,
          contenedorErrores
        );
        guardarDatosLocal(objetoJSON);
      } else if (id === "mostrar" || id === "limpiar") {
        mostrarInfo(objetoJSON, contenedorInfo);
      } else if (id === "filtrarDatos") {
        filtrarInfo(objetoJSON, contenedorInfo, formulario);
      } else if (id === "borrarDato") {
        const indice = evento.target.parentNode.id;
        objetoJSON = borrarDato(objetoJSON, indice);
        mostrarInfo(objetoJSON, contenedorInfo);
        guardarDatosLocal(objetoJSON);
      }
    },
    false
  );
}; // Fin del window onload.
