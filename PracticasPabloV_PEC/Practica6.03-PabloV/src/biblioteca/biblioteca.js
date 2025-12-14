// Función universal para traer datos de una API.
const traerDatos = (url) => {
  return fetch(url)
    .then((respuesta) => {
      return respuesta.json();
    })
    .then((datos) => {
      return datos;
    })
    .catch((error) => {
      return `se ha producido un error: ${error}`;
    });
};

// Función para darle formato europeo a una fecha.
const formatearFecha = (fecha) =>{
    return new Date(fecha).toLocaleDateString("es-ES");
};

export {traerDatos, formatearFecha};