"use strict";
// Valida que el campo tenga al menos cinco caracteres y que sea obligatorio
const validarCampoTexto = (formulario) => {
    const expresion = /^.{5,}$/;
    if (expresion.test(formulario.nombre.value)){
        return true;
    }else{
        const nombre = document.getElementById("nombre");
        nombre.classList.add("fallo");

        insertarMensajeError("Los campos de texto deben tener al menos cinco caracteres y son obligatorios.");

        return false;
    }
};

const insertarMensajeError = (mensajeError) =>{

    const contenedorErrores = document.getElementById("errores");
    const elementoLista = document.getElementById("listaErrores");

    // quiere decir que aún no se ha creado porque no han ocurrido errores
    if (elementoLista === null){

      const titulo = document.createElement("h3");
      titulo.textContent = "Se han encontrado errores:";

      const listaErrores = document.createElement("ol");
      listaErrores.setAttribute("id", "listaErrores");

      const contenidoLista = document.createElement("p");
      contenidoLista.textContent = mensajeError;
      
      // Se asigna el mensaje de error dentro de la lista
      const li = document.createElement("li");
      li.appendChild(contenidoLista);
      listaErrores.appendChild(li);

      contenedorErrores.appendChild(listaErrores);

    }else{
      // Si ya se ha creado porque hay errores, simplemente se crea el mensaje de error y se añade a la lista
      const contenidoLista = document.createElement("p");
      contenidoLista.textContent = mensajeError;
      const li = document.createElement("li");
      li.appendChild(contenidoLista);

      elementoLista.appendChild(li);
    }


}

// Valida que el campo tenga cuatro caracteres númericos.
const validarFecha = () => {};

// Valida que se ha seleccionado alguna de las opciones del radio buton.
const validarTipoMusica = () => {};

// Valida que se usa el formato de dos letras mayÚsculas (ES-001AA)
const validarLocalizacion = () => {};

const verificarInfo = (formulario, objetoJSON) => {
     if(validarCampoTexto(formulario)){
        console.log("Esta correcto");
     }
        
};

const guardarInfo = (formulario, objetoJSON) => {
  let prestado = formulario.prestado.checked;

  const disco = {
    Nombre: formulario.nombre.value,
    Caratula: formulario.caratula.value,
    Grupo: formulario.grupo.value,
    FechaPublicacion: formulario.fechaPublicacion.value,
    Genero: formulario.opcionesGenero.value,
    Codigo: formulario.codigo.value,
    Prestado: prestado,
  };

  objetoJSON = [...objetoJSON, disco];

  console.log(objetoJSON);
};
export {
  validarCampoTexto,
  validarFecha,
  validarLocalizacion,
  validarTipoMusica,
  verificarInfo,
  guardarInfo,
};
