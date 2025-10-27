import React, { useState } from "react";
import peliculas_json from "../../../json/Peliculas.json";
import PeliculaDetalle from "./PeliculaDetalle.jsx";
import "./Peliculas.css";

const Peliculas = () => {

  const [peliculaSeleccionada, setPeliculaSeleccionada] = useState(null);

    if (peliculaSeleccionada !==null) {
    return (
      <PeliculaDetalle
        pelicula={peliculaSeleccionada}
        volverInicio={() => setPeliculaSeleccionada(null)}
      />
    );
  }

  return (
    <div>
      <h1>Esta es la página de Películas.</h1>
      {peliculas_json.Peliculas.length > 0
        ? peliculas_json.Peliculas.map((pelicula, indice, array) => {
            return (
              <div key={indice} onClick={ ()=> setPeliculaSeleccionada(pelicula)}>
                <h2>{pelicula.titulo}</h2>
                <img src={pelicula.cartela}></img>
                <p>{pelicula.anyo}</p>
              </div>
            );
          })
        : "No hay Películas almacenadas"}
    </div>
  );
};

export default Peliculas;
