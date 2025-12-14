"use strict";
import {
  validarFormulario,
  mostrarInfo,
  filtrarInfo,
  borrarDato,
  guardarDatosLocal,
} from "./biblioteca.js";

window.onload = () => {
  // Se crean y seleccionan parámetros y elementos del DOM que se usarán en las funciones de la biblioteca.
  const formulario = document.forms.formularioDiscos;
  const contenedorPrincipal = document.getElementById("app");

  const contenedorErrores = document.getElementById("errores");
  contenedorErrores.classList.add("ocultar");
  const contenedorInfo = document.getElementById("informacion");

  //Se obtienen (si existen) los datos guardados en Local Storage con el identificador "infoDisco".
  // Además, se asigna dicha variable (si tiene datos) al JSON de discos, si no, es un array vacío.
  const datosRescatados = localStorage.getItem("infoDisco");
  let objetoJSON = datosRescatados ? JSON.parse(datosRescatados) : [];

  // Si se cuenta con datos quiere decir que Local Storage ha almacenado previamente,
  // por lo que se muestran dichos datos para enseñarselo al usuario.
  if (objetoJSON.length > 0) {
    mostrarInfo(objetoJSON, contenedorInfo);
  }

  // Delegación de eventos pura y dura.
  contenedorPrincipal.addEventListener(
    "click",
    (evento) => {
      const id = evento.target.id; // se usa el atributo "id" del que dispara el evento click para identificarlo y hacer una cosa u otra.

      if (id === "enviar") {
        // Se guarda en el array el objeto JSON que devuelve la función "validarFormulario" en caso de pasar la validación.
        // Y para que se queden guardados los cambios en local, se usa Local Storage.
        objetoJSON = validarFormulario(formulario,objetoJSON,contenedorErrores);
        guardarDatosLocal(objetoJSON);
      } else if (id === "mostrar" || id === "limpiar") {
        mostrarInfo(objetoJSON, contenedorInfo);
      } else if (id === "filtrarDatos") {
        filtrarInfo(objetoJSON, contenedorInfo, formulario);
      } else if (id === "borrarDato") {

        if (confirm("¿Quieres borrar el dato seleccionado?")){
          // Se vuelve a guardar en el array el objeto JSON pero esta vez sin el elemento borrado que el usuario seleccione.
          // Y se usa Local Storage para guardar los cambios del objeto JSON en local.
          const indice = evento.target.parentNode.id;
          objetoJSON = borrarDato(objetoJSON, indice);
          mostrarInfo(objetoJSON, contenedorInfo);
          guardarDatosLocal(objetoJSON);
        }
      }
    },
    false
  );
}; // Fin del window onload.
