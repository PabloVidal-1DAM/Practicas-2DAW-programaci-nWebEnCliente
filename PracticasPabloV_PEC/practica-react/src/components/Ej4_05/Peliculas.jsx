import React from "react";
import Pelicula from "./Pelicula";
import Peliculas_json from "../../json/Peliculas.json";


const Peliculas = () => {
  const datosPeliculas = Peliculas_json;
  return (
    <>
      <div>
        {datosPeliculas.Peliculas.map((pelicula, index) => (
          <Pelicula
            key={index}
            titulo={pelicula.titulo}
            direccion={pelicula.direccion}
            cartela={pelicula.cartela}
          >
            {pelicula.descripcion}
          </Pelicula>
        ))}
      </div>
    </>
  );
};

export default Peliculas;
