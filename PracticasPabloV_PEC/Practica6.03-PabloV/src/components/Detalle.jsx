import React, { useEffect, useState } from "react";
import { formatearFecha, traerDatos } from "../biblioteca/biblioteca.js";
import Interpretes from "./Interpretes.jsx";

const Detalle = ({ peliculaSeleccionada }) => {
  const fecha = formatearFecha(peliculaSeleccionada.release_date);

  // Estado en donde se meterán los interpretes una vez se tengan.
  const [interpretes, setInterpretes] = useState([]);

  useEffect(() => {
    let endpoints = [];
    for (let i = 0; i < 10; i++) {
      endpoints = [...endpoints, peliculaSeleccionada.characters[i]];
    }

    const traerInterpretes = async () => {
      const promesasInterpretes = endpoints.map((endpoint) => {
        return traerDatos(endpoint);
      });

      const interpretes = await Promise.allSettled(promesasInterpretes);
      return interpretes;
    };

    traerInterpretes().then((resultado) => {
      // Se guarda en el estado de interpretes, para acceder a su valor hará falta poner el .value.
      setInterpretes(resultado);
    });
  }, [peliculaSeleccionada]);

  return (
    <div id="detalles">
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
    </div>
  );
};

export default Detalle;
