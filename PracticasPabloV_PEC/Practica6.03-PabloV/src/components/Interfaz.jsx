import React, { useEffect, useState } from "react";
import "./Interfaz.css";
import { traerDatos } from "../biblioteca/biblioteca.js";
import Peliculas from "./Peliculas.jsx";
import Detalle from "./Detalle.jsx";

const Interfaz = () => {
  // En este componente traeré las peliculas 1 sola vez para pasarsela a los componentes
  // "Peliculas", "Pelicula", "Residentes" y "Residente".

  const [peliculas, setPeliculas] = useState([]);
  const [peliculaSeleccionada, setPeliculaSeleccionada] = useState(null);

  const traerPeliculas = async () => {
    try {
      const peliculas = await traerDatos("https://swapi.info/api/films");
      setPeliculas(peliculas);
    } catch (error) {
      console.log("ha ocurrido un error al traer los datos: " + error);
    }
  };

  // Cada vez que se cargue el componente, se traerán los datos de la API
  // y se meterán en su setter del estado.
  useEffect(() => {
    traerPeliculas();
  }, []);

  return (
    <div>
      <h2>API Star Wars.</h2>
      <div id="contenido">
        <Peliculas peliculas={peliculas} setPeliculas={setPeliculas} setPeliculaSeleccionada={setPeliculaSeleccionada} />

        {peliculaSeleccionada !== null ?
         <Detalle peliculaSeleccionada={peliculaSeleccionada} /> 
         : ""}
      </div>
    </div>
  );
};

export default Interfaz;
