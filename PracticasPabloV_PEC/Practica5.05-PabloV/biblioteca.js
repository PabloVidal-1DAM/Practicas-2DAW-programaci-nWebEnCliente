"use strict";
// Valida que el campo tenga al menos cinco caracteres y que sea obligatorio
const validarCampoTexto = (formulario, contenedorErrores) => {
  const datosDiscos = document.getElementById("datosDiscos");
  const expresion = /^.{5,}$/;
  if (
    expresion.test(formulario.nombre.value) &&
    expresion.test(formulario.grupo.value)
  ) {
    datosDiscos.classList.remove("fallo");
    return true;
  } else {
    datosDiscos.classList.add("fallo");

    insertarMensajeError(
      "Los campos de texto deben tener al menos cinco caracteres y son obligatorios.",
      contenedorErrores
    );

    return false;
  }
};

// Valida que el campo tenga cuatro caracteres númericos.
const validarFecha = (formulario, contenedorErrores) => {
  const datosDiscos = document.getElementById("datosDiscos");
  const expresion = /^\d{4}$/;

  if (expresion.test(formulario.fechaPublicacion.value)) {
    datosDiscos.classList.remove("fallo");
    return true;
  } else {
    datosDiscos.classList.add("fallo");

    insertarMensajeError(
      "La fecha solo debe disponer de cuatro caracteres numéricos",
      contenedorErrores
    );

    return false;
  }
};

// Valida que se ha seleccionado alguna de las opciones del radio buton.
const validarTipoMusica = (formulario, contenedorErrores) => {
  const radioButons = formulario.opcionesGenero;
  const generos = document.getElementById("generos");

  for (let i = 0; i < radioButons.length; i++) {
    if (radioButons[i].checked) {
      generos.classList.remove("fallo");
      return true;
    }
  }
  generos.classList.add("fallo");

  insertarMensajeError(
    "Tiene que haber 1 radio buton marcado.",
    contenedorErrores
  );

  return false;
};

// Valida que se usa el formato de dos letras mayÚsculas (ES-001AA)
const validarLocalizacion = (formulario, contenedorErrores) => {
  const codigo = document.getElementById("campoCodigo");
  const expresion = /^ES-\d{3}[A-Z]{2}$/;

  if (expresion.test(formulario.codigo.value)) {
    codigo.classList.remove("fallo");
    return true;
  } else {
    codigo.classList.add("fallo");
    insertarMensajeError(
      `Se debe seguir el formato ES-001AA donde 001 es el número de la estantería y AA la balda (combinación de dos letras mayúsculas).`,
      contenedorErrores
    );
    return false;
  }
};

// validación de todos los campos que forman el formulario,
// si pasa la validación, se borran los errores y se llama a la función para guardar la info.
const validarFormulario = (formulario, objetoJSON, contenedorErrores) => {
  if ( 
    validarCampoTexto(formulario, contenedorErrores) &&
    validarFecha(formulario, contenedorErrores) &&
    validarTipoMusica(formulario, contenedorErrores) &&
    validarLocalizacion(formulario, contenedorErrores)
  ) {
    // Se guarda en una variable la información nueva añadida, que es lo que se devolverá en el return.
    let infoGuardada = guardarInfo(formulario, objetoJSON);

    contenedorErrores.innerHTML = "";
    contenedorErrores.classList.add("ocultar");
    formulario.reset();

    return infoGuardada;
  } else {
    // En caso de fallar la validación, se devuelve el array sin haberle introducido la información nueva.
    return objetoJSON;
  }
};

const insertarMensajeError = (mensajeError, contenedorErrores) => {
  contenedorErrores.classList.remove("ocultar");
  const elementoLista = document.getElementById("listaErrores");

  let plantilla = "";

  // quiere decir que aún no se ha creado porque no han ocurrido errores
  if (elementoLista === null) { //h3, ol, li y p.
    plantilla += `<h3>Se han encontrado errores </h3>
                  <ol id="listaErrores"><li><p>${mensajeError}</p></li></ol>`;
    contenedorErrores.innerHTML = plantilla;
  } else {
    // Si ya se ha creado porque hay errores, simplemente se crea el mensaje de error y se añade a la lista
    plantilla += `<li><p>${mensajeError}</p></li>`

    elementoLista.innerHTML += plantilla;
  }
};

// Se le añade al array que en un principio esta vacío el objeto JSON con los datos del formulario.
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
};

// Se inserta en el contenedor "información" los datos del objeto JSON que están guardados en el array "objetoJSON"
const mostrarInfo = (objetoJSON, contenedorInfo) => {
  contenedorInfo.innerHTML = "";

  //En caso  de no contener datos en el array, se le da el feedback al usuario.
  if (objetoJSON.length === 0) {
    contenedorInfo.innerHTML =
      "<h2>No hay información guardada para mostrar.</h2>";
  } else {
    contenedorInfo.innerHTML = "<h2>Elementos guardados: </h2>";
  }

  // Se recorre el array para añadir contenedores que relleno con listas desordenadas de los datos del array.
  objetoJSON.forEach((valor, indice, array) => {
    const contenedorElementos = document.createElement("div");

    // El asignarle un id me ayudará a poder borrarlos más adelante.
    contenedorElementos.setAttribute("id", indice);
    contenedorElementos.innerHTML = `
          <ul>
            <li> Nombre: ${valor.nombre} </li>
            <li> Caratula: ${valor.caratula} </li>
            <li> Grupo: ${valor.grupo} </li>
            <li> Fecha de Publicación: ${valor.fechaPublicacion} </li>
            <li> Genero: ${valor.genero} </li>
            <li> Código: ${valor.codigo} </li>
            <li> prestado: ${valor.prestado} </li>
          </ul>`;
    crearBtnBorrado(contenedorElementos, contenedorInfo);
  });
};

//Se filtra el array del JSON con el nombre que el usuario ponga en el input del filtrado.
const filtrarInfo = (objetoJSON, contenedorInfo, formulario) => {
  if (formulario.filtrar.value === "" || objetoJSON.length === 0) {
    contenedorInfo.innerHTML = "<h2>No hay datos para filtrar</h2>";
  } else {
    contenedorInfo.innerHTML = "<h2>Información Filtrada</h2>";

    // Devuelve todos los campos anteriores del JSON menos el que coincide con el que ponga el usuario para filtrar.
    const JSONFiltrado = objetoJSON.filter((valor) => {
      return valor.nombre === formulario.filtrar.value;
    });

    // se recorre este nuevo array y se usan contenedores y listas para enseñar los datos.
    JSONFiltrado.forEach((valor, indice, array) => {
      const contenedorElementosFiltrado = document.createElement("div");

      // Se les identifica con un id para poder borrarse más adelante
      contenedorElementosFiltrado.setAttribute("id", indice);
      contenedorElementosFiltrado.innerHTML = `
    <ul>
      <li> Nombre: ${valor.nombre} </li>
      <li> Caratula: ${valor.caratula} </li>
      <li> Grupo: ${valor.grupo} </li>
      <li> Fecha de Publicación: ${valor.fechaPublicacion} </li>
      <li> Genero: ${valor.genero} </li>
      <li> Código: ${valor.codigo} </li>
      <li> prestado: ${valor.prestado} </li>
    </ul>`;
      crearBtnBorrado(contenedorElementosFiltrado, contenedorInfo);
    });
  }
};

// Función que separé de codigo de otras funciones para aplicar la lógica de 1 función, 1 tarea, y además no repetir código.
const crearBtnBorrado = (contenedorElementos, contenedorInfo) => {
  const btnBorrar = document.createElement("button");
  btnBorrar.setAttribute("id", "borrarDato");
  btnBorrar.textContent = "Borrar";

  const separadorVisual = document.createElement("hr");

  contenedorElementos.appendChild(btnBorrar);
  contenedorElementos.appendChild(separadorVisual);

  contenedorInfo.appendChild(contenedorElementos);
};

// Se obtiene el atributo "id" del contenedor que tiene toda la información de dicho objeto del JSON.
// Dicho id se usa para filtrar el array para devolver todos menos el que coincida con este.
const borrarDato = (objetoJSON, indice) => {
  const indiceInfo = Number(indice);

  const nuevoObjeto = objetoJSON.filter((valor, indice, array) => {
    return indice !== indiceInfo;
  });

  return nuevoObjeto;
};

// Se convierte el array de JSON a un string para poder almacenarlo en Local Storage, 
// con la etiqueta "infoDisco" que identifica estos datos.
const guardarDatosLocal = (objetoJSON) =>{
  const stringJSON = JSON.stringify(objetoJSON);
  localStorage.setItem("infoDisco", stringJSON);
}

export {
  validarCampoTexto,
  validarFecha,
  validarLocalizacion,
  validarTipoMusica,
  validarFormulario,
  guardarInfo,
  mostrarInfo,
  filtrarInfo,
  borrarDato,
  guardarDatosLocal
};
