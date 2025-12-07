import React from "react";
import {formatearFecha} from "../biblioteca/biblioteca.js";

const Detalle = ({peliculaSeleccionada}) => {
    const fecha = formatearFecha(peliculaSeleccionada.release_date);
  return (
    <div id="detalles">
        <h2>{peliculaSeleccionada.title}</h2>
        <p><strong>Episodio:</strong> {peliculaSeleccionada.episode_id}</p>
        <p><strong>Director:</strong> {peliculaSeleccionada.director}</p>
        <p><strong>Productor:</strong> {peliculaSeleccionada.producer}</p>
        <p><strong>Fecha estreno:</strong> {fecha}</p>
        <h3>Mensaje de Inicio:</h3>
        <p>{peliculaSeleccionada.opening_crawl}</p>
    </div>
  );
};

export default Detalle;
