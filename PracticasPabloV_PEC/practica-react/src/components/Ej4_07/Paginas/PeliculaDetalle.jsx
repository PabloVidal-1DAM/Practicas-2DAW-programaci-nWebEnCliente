import React from "react";

const PeliculaDetalle = (props) => {
  return (
    <div>
      <h2>{props.pelicula.titulo}</h2>
      <img src={props.pelicula.cartela} />
      <p>Año: {props.pelicula.anyo}</p>
      <p>Director: {props.pelicula.direccion}</p>
      <p>Descripción: {props.pelicula.descripcion}</p>

      <button onClick={props.volverInicio}>
        Ocultar detalle
      </button>
    </div>
  );
};

export default PeliculaDetalle;
