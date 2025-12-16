"use strict";

const traerDatos = async (url) => {
  try {
    const respuesta = await fetch(url);

    // si algo sale mal
    if (!respuesta.ok) {
      throw new Error(
        `Ha ocurrido un error al traer los datos de la API: ${respuesta.status} : ${respuesta.statusText}`
      );
    }

    const datos = await respuesta.json();

    if (datos.results) {
      return datos.results;
    }

    return datos;
  } catch (error) {
    throw error;
  }
};

const traerInterpretes = async () => {
  // La primera vez solo devuelve mas endpoints a los que consultar.
  const endpoints = await traerDatos("https://swapi.py4e.com/api/");

  // Por lo que es necesario volver a llamarla con el endpoint que se quiere consultar, en este caso el de personas.
  const datos = await traerDatos(endpoints.people);
  return datos;
};

const insertarMensajeError = (contenedor, mensaje) => {
  contenedor.classList.remove("ocultar");

  const listaErrores = document.getElementById("listaErrores");

  // Si la lista no existe al seleccionarla por id, se crea por primera vez, con TODA su estructura.
  if (!listaErrores) {
    mensaje = `<h3>Han ocurrido errores</h3>
            <ol id="listaErrores">
                <li><p>${mensaje}</p></li>
            </ol>`;
    contenedor.innerHTML = mensaje;
  } else {
    // Si se selecciona, existe, por lo que solo se le inserta un nuevo error más.
    mensaje = `<li><p>${mensaje}</p></li>`;
    listaErrores.innerHTML += mensaje;
  }
};

const insertarMensajeInfo = (posicion,mensaje) =>{
          // Insertar un contenedor para información, detras del h1

          const divInfo = document.createElement("div");
          divInfo.classList.add("info");
          divInfo.setAttribute("id", "contenedorInfo");
          divInfo.innerHTML = `<h3>Hey</h3>
                                <p>${mensaje}</p>`;

          posicion[0].append(divInfo);
}

// Objeto JSON para cada pieza de información traída de la API.
const construirJsonAPI = (dato) => {
  const objeto = {
    id: crypto.randomUUID(),
    nombre: dato.name,
    height: dato.height,
    mass: dato.mass,
    hair_color: dato.hair_color,
    skin_color: dato.skin_color,
    eye_color: dato.eye_color,
    birth_year: dato.birth_year,
    gender: dato.gender,
    films: dato.films,
  };
  return objeto;
};

// Objeto JSON creado a partir de la información puesta por el usuario del formulario.
const construirJsonFormulario = (formulario) => {
  const objetoForm = {
    id: crypto.randomUUID(),
    nombre: formulario.name.value,
    height: formulario.height.value,
    mass: formulario.mass.value,
    hair_color: formulario.hair_color.value,
    skin_color: formulario.skin_color.value,
    eye_color: formulario.eye_color.value,
    birth_year: formulario.birth_year.value,
    gender: formulario.gender.value,
  };

  return objetoForm;
};

const validarFormulario = (formulario, contenedorError) => {
    // Validación el formulario.
    if (validarCamposTexto(formulario, contenedorError) &&
        validarCamposNumericos(formulario, contenedorError) && 
        validarFecha(formulario, contenedorError)&&
        validarRadioBtn(formulario,contenedorError)) {
      return true;
    }
};

const validarCamposTexto = (formulario, contenedorError) =>{
  const campo = formulario.name.value;
  const campo2 = formulario.hair_color.value;
  const campo3 = formulario.skin_color.value;
  const campo4 = formulario.eye_color.value;
  const expresion = /^.{5,}$/;

  if(expresion.test(campo) && expresion.test(campo2) && expresion.test(campo3) && expresion.test(campo4)){
    return true;
  }else{
    insertarMensajeError(contenedorError, "Los campos de texto deben tener al menos cinco caracteres y son obligatorios.");
    return false;
  }
  
}

const validarCamposNumericos = (formulario, contenedorError) =>{
 // Esta vez no voy a  acceder a los campos con document.forms, si no con querySelector para pacticar otras maneras.
  const inputNumber = formulario.querySelectorAll('input[type="number"]'); // 1: Altura, 2:Peso

  const altura= inputNumber[0].value;
  const peso = inputNumber[1].value;
  const expresion = /^\d+$/;

  if(expresion.test(altura) && expresion.test(peso)){
      return true;
  }else{
    insertarMensajeError(contenedorError, "Los campos numericos solo pueden ser números, y al menos 1.")
    return false;
  }
}

const validarFecha = (formulario, contenedorErrores) =>{
  const inputFecha = formulario.querySelector('input[type="date"]');

  if(inputFecha.value !== ""){
    return true;
  }else{
    insertarMensajeError(contenedorErrores, "La fecha solo debe disponer de cuatro caracteres numéricos.");
    return false;
  }
}

const validarRadioBtn = (formulario, contenedorErrores) =>{
  const inputRadio = formulario.querySelectorAll('.radio-item input[type="radio"]');
  let marcado = false;
  for (let i = 0; i< inputRadio.length; i++){
    if(inputRadio[i].checked){
        marcado = true;
    }
  }

  if(marcado === true){
    return true
  }else{
    insertarMensajeError(contenedorErrores, "Debe de haber al menos un radio button marcado.")
    return false;
  }


}

const crearDivMostrarInfo = () =>{
  const divMostrar = document.createElement("div");
  divMostrar.setAttribute("id", "mostrarInfo");

  document.body.appendChild(divMostrar);
}

export {
  traerDatos,
  traerInterpretes,
  insertarMensajeError,
  construirJsonAPI,
  validarFormulario,
  construirJsonFormulario,
  insertarMensajeInfo,
  crearDivMostrarInfo,
};
