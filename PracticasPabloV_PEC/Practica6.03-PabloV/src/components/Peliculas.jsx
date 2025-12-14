import React from "react";
import Pelicula from "./Pelicula";

const Peliculas = ({ peliculas, setPeliculas, setPeliculaSeleccionada }) => {

// Componente que representa a los titulos de las peliculas que irán en el aside.

  return (
    <aside id="app">
      <ul>
        {peliculas.length ? (
          peliculas.map((pelicula, i) => {
            return <Pelicula nombre={pelicula.title} pelicula={pelicula} setPeliculaSeleccionada={setPeliculaSeleccionada} key={i} />;
          })
        ) : (
          <li>No hay Peliculas que mostrar</li>
        )}
      </ul>
    </aside>
  );
};

export default Peliculas;
