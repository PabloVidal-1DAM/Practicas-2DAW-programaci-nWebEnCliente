import React, { useEffect, useState, useContext } from "react";
import { PeliculasContext } from "../contexto/ContextoPeliculas";
import { formatearFecha, traerDatos } from "../biblioteca/biblioteca.js";
import Interpretes from "./Interpretes.jsx";

const Detalle = () => {
  const { peliculaSeleccionada } = useContext(PeliculasContext);
  const [interpretes, setInterpretes] = useState([]);

  // Se hará siempre que una pelicula se seleccione.
  useEffect(() => {
    if (peliculaSeleccionada) {
      const traerInterpretes = async () => {
        const endpoints = peliculaSeleccionada.characters?.slice(0, 10) || [];
        const promesas = endpoints.map((url) => traerDatos(url));
        const resultados = await Promise.allSettled(promesas);
        setInterpretes(resultados);
      };

      traerInterpretes();
    }
  }, [peliculaSeleccionada]);

  //Solo se hace si existe la película, si no, es null.
  let fecha = null;
  if(peliculaSeleccionada){
    fecha = formatearFecha(peliculaSeleccionada.release_date);
  }

  return (
    <div id="detalles">
      {!peliculaSeleccionada ? (
        <p>Selecciona una Película para ver los detalles.</p>
      ) : (
        <>
          <h2>{peliculaSeleccionada.title}</h2>
          <p>
            <strong>Episodio:</strong> {peliculaSeleccionada.episode_id}
          </p>
          <p>
            <strong>Director:</strong> {peliculaSeleccionada.director}
          </p>
          <p>
            <strong>Productor:</strong> {peliculaSeleccionada.producer}
          </p>
          <p>
            <strong>Fecha estreno:</strong> {fecha}
          </p>
          <h3>Mensaje de Inicio:</h3>
          <p>{peliculaSeleccionada.opening_crawl}</p>

          <Interpretes interpretes={interpretes} />
        </>
      )}
    </div>
  );
};

export default Detalle;
