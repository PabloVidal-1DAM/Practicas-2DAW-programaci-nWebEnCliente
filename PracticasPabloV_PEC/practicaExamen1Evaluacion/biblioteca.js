"use strict";

const traerDatos = async (url) => {
  try {
        const respuesta = await fetch(url);

        // si algo sale mal
        if (!respuesta.ok) {
            throw new Error(`Ha ocurrido un error al traer los datos de la API: ${respuesta.status} : ${respuesta.statusText}`);
        }

        const datos = await respuesta.json();

        if(datos.results){
            return datos.results;
        }

        return datos;
    } catch (error) {
        throw error;
    }
};

    const traerInterpretes = async () =>{
        const endpoints = await traerDatos("https://swapi.py4e.com/api/");

        const datos = await traerDatos(endpoints.people);
        return datos;
    }

    const insertarMensajeError = (contenedor, mensaje) =>{
        contenedor.classList.remove("ocultar");

        const listaErrores = document.getElementById("listaErrores");

        if (!listaErrores){
            mensaje = `<h3>Han ocurrido errores</h3>
            <ol id="listaErrores">
                <li><p>${mensaje}</p></li>
            </ol>`;
            contenedor.innerHTML = mensaje;
        }else{
            mensaje = `<li><p>${mensaje}</p></li>`;
            listaErrores.innerHTML += mensaje;
        }
    }

    const construirObjeto = (dato) =>{
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
            films: dato.films
        }
        return objeto
    }

export {traerDatos, traerInterpretes, insertarMensajeError, construirObjeto};
