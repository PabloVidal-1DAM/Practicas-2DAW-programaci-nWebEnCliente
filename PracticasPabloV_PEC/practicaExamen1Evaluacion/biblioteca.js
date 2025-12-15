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
  try {
    // Futura validación.
    if (true) {
      return true;
    }
  } catch (error) {
    // mostrar mensaje de error que se pasarán desde las distintas funciones al validar el formulario con la función.
  }
};

export {
  traerDatos,
  traerInterpretes,
  insertarMensajeError,
  construirJsonAPI,
  validarFormulario,
  construirJsonFormulario
};
