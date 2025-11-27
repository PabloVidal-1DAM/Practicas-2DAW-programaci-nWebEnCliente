"use strict";

const traerDatos = (url) => {
  return fetch(url)
    .then((respuesta) => {
      return respuesta.json();
    })
    .then((datos) => {
      return datos;
    })
    .catch((error) => {
      return `se ha producido un error: `;
    });
};

const insertarPeliculas = async (url, aside) => {
  const peliculas = await traerDatos(url);
  aside.innerHTML = crearPlantilla(peliculas);
};

const crearPlantilla = (datos) => {
  let plantilla = "";
  if (Array.isArray(datos) && datos.length) {
    datos.forEach((peli, i) => {
      plantilla += `<ul>
                                <li id=${i}>${peli.title}</li>
                          </ul>`;
    });
  } else {
    plantilla = "<h3>No existen datos que mostrar</h3>";
  }

  return plantilla;
};

const crearPlantillaDetalle = (pelicula) => {
  if (!pelicula) {
    return `<h3>No hay información que mostrar`;
  } else {

    const fecha = formatearFecha(pelicula.release_date);

    return `
        <h2>${pelicula.title}</h2>
        <p><strong>Episodio:</strong> ${pelicula.episode_id}</p>
        <p><strong>Director:</strong> ${pelicula.director}</p>
        <p><strong>Productor:</strong> ${pelicula.producer}</p>
        <p><strong>Fecha estreno:</strong> ${fecha}</p>
        <h3>Opening Crawl:</h3>
        <p>${pelicula.opening_crawl}</p>
    `;
  }
};

const formatearFecha = (fecha) =>{
    return new Date(fecha).toLocaleDateString("es-ES");
}

const mostrarDetalle = async (url, id, contenedor) => {
  const peliculas = await traerDatos(url);
  const peliculaConcreta = peliculas[id];
  contenedor.innerHTML = crearPlantillaDetalle(peliculaConcreta);
};
export { traerDatos, insertarPeliculas, mostrarDetalle };
