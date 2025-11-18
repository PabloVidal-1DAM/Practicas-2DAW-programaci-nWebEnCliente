"use strict";
// Valida que el campo tenga al menos cinco caracteres y que sea obligatorio
const validarCampoTexto = (formulario) => {
    const datosDiscos = document.getElementById("datosDiscos");
    const expresion = /^.{5,}$/;
    if (expresion.test(formulario.nombre.value) && expresion.test(formulario.grupo.value)){
        datosDiscos.classList.remove("fallo");
        return true;
    }else{
        datosDiscos.classList.add("fallo");

        insertarMensajeError("Los campos de texto deben tener al menos cinco caracteres y son obligatorios.");

        return false;
    }
};

// Valida que el campo tenga cuatro caracteres númericos.
const validarFecha = (formulario) => {
  const datosDiscos = document.getElementById("datosDiscos");
  const expresion = /^\d{4}$/;

  if (expresion.test(formulario.fechaPublicacion.value)){
    datosDiscos.classList.remove("fallo");
    return true;
  }else{
    datosDiscos.classList.add("fallo");

    insertarMensajeError("La fecha solo debe disponer de cuatro caracteres numéricos");

    return false;
  }
};

// Valida que se ha seleccionado alguna de las opciones del radio buton.
const validarTipoMusica = (formulario) => {

  const radioButons = formulario.opcionesGenero;
  const generos = document.getElementById("generos");

  for ( let i = 0; i < radioButons.length; i++){
    if (radioButons[i].checked){
      generos.classList.remove("fallo");
      return true;

    }
  }
  generos.classList.add("fallo");
  insertarMensajeError("Tiene que haber 1 radio buton marcado.");
  return false;
};

// Valida que se usa el formato de dos letras mayÚsculas (ES-001AA)
const validarLocalizacion = (formulario) => {
  const codigo = document.getElementById("campoCodigo");
  const expresion = /^ES-\d{3}[A-Z]{2}$/;

  if (expresion.test(formulario.codigo.value)){
    codigo.classList.remove("fallo");
    return true;
  }else{
    codigo.classList.add("fallo");
    insertarMensajeError(`Se debe seguir el formato ES-001AA donde 001 es el número de la estantería y AA la balda (combinación de dos letras mayúsculas)."`);
    return false;
  }

};

const validarFormulario = (formulario, objetoJSON) => {
     if(validarCampoTexto(formulario) && validarFecha(formulario) && validarTipoMusica(formulario) && validarLocalizacion(formulario)){
      
        let infoGuardada = guardarInfo(formulario, objetoJSON);

        const contenedorErrores = document.getElementById("errores");
        contenedorErrores.innerHTML = ""; 

        return infoGuardada;
     }else{
      // En caso de fallar la validación, se devuelve el array sin haberle introducido la información nueva.
        return objetoJSON
     }
        
};

const insertarMensajeError = (mensajeError) =>{

    const contenedorErrores = document.getElementById("errores");
    const elementoLista = document.getElementById("listaErrores");

    // quiere decir que aún no se ha creado porque no han ocurrido errores
    if (elementoLista === null){

      const titulo = document.createElement("h3");
      titulo.textContent = "Se han encontrado errores:";

      contenedorErrores.appendChild(titulo);

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

const guardarInfo = (formulario, objetoJSON) => {
  let prestado = formulario.prestado.checked;

  const disco = {
    nombre: formulario.nombre.value,
    caratula: formulario.caratula.value,
    grupo: formulario.grupo.value,
    fechaPublicacion: formulario.fechaPublicacion.value,
    genero: formulario.opcionesGenero.value,
    codigo: formulario.codigo.value,
    prestado: prestado,
  };



  return [...objetoJSON, disco];
}

const mostrarInfo = (objetoJSON) =>{
  const contenedorInfo = document.getElementById("informacion");

  if ( objetoJSON.length === 0){
    contenedorInfo.innerHTML = "<h2>No hay información guardada para mostrar.</h2>";
  }else{
    contenedorInfo.innerHTML = "<h2>Elementos guardados: </h2>";
  }
  

      objetoJSON.forEach((valor,indice,array) =>{
        const contenedorElementos = document.createElement("div");
        contenedorElementos.innerHTML = `
          <ul>
            <li> Nombre: ${valor.nombre} </li>
            <li> Caratula: ${valor.caratula} </li>
            <li> Grupo: ${valor.grupo} </li>
            <li> Fecha de Publicación: ${valor.fechaPublicacion} </li>
            <li> Genero: ${valor.genero} </li>
            <li> Código: ${valor.codigo} </li>
            <li> prestado: ${valor.prestado} </li>
          </ul>
          <hr>`;
          contenedorInfo.appendChild(contenedorElementos);
  })
}

export {
  validarCampoTexto,
  validarFecha,
  validarLocalizacion,
  validarTipoMusica,
  validarFormulario,
  guardarInfo,
  mostrarInfo
};
