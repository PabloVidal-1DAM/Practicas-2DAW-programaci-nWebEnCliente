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

const formatearFecha = (fecha) =>{
    return new Date(fecha).toLocaleDateString("es-ES");
};

export {traerDatos, formatearFecha};