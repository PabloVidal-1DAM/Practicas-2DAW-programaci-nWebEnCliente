import React, { useContext } from "react";
import Pelicula from "./Pelicula";
import { PeliculasContext } from "../contexto/ContextoPeliculas";

const Peliculas = () => {
  const { peliculas, setPeliculaSeleccionada } = useContext(PeliculasContext);

  return (
    <aside id="app">
      <ul>
        {peliculas.length > 0 ? (
          peliculas.map((pelicula, i) => (
            <Pelicula 
              key={i} 
              nombre={pelicula.title} 
              pelicula={pelicula} 
              setPeliculaSeleccionada={setPeliculaSeleccionada} 
            />
          ))
        ) : (
          <li>Cargando películas...</li>
        )}
      </ul>
    </aside>
  );
};

export default Peliculas;
