import React, { useEffect, useState } from "react";
import { formatearFecha, traerDatos } from "../biblioteca/biblioteca.js";
import Interpretes from "./Interpretes.jsx";

const Detalle = ({ peliculaSeleccionada }) => {

  const fecha = formatearFecha(peliculaSeleccionada.release_date);

  // Estado en donde se meterán los interpretes una vez se tengan.
  const [interpretes, setInterpretes] = useState([]);

  // Cada vez que el usuario seleccione otra pelicula de "Pelicula.jsx" y su estado cambie: 
  
  useEffect(() => {
    // Se escogerán los 10 primeros endpoints de los actores de dicha película.
    let endpoints = [];
    for (let i = 0; i < 10; i++) {
      endpoints = [...endpoints, peliculaSeleccionada.characters[i]];
    }
    // Ya que aún no se tienen los datos, se tienen que tratar los endpoints.
    const traerInterpretes = async () => {
      const promesasInterpretes = endpoints.map((endpoint) => {
        return traerDatos(endpoint);
      });

      // Una vez han sido tratados, se devuelve un array de promesas que tienen que ser lanzadas.
      const interpretes = await Promise.allSettled(promesasInterpretes);
      return interpretes;
    };

    // Y por último, se consumen todas las promesas para obtener la información y se guarda en el estado.
    traerInterpretes().then((resultado) => {
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

      {/*Se le pasa el estado que contiene los interpretes para que los imprima. */}
      <Interpretes interpretes={interpretes} />
    </div>
  );
};

export default Detalle;
