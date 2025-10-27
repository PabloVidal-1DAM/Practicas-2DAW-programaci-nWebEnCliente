import React, { useState } from "react";
import peliculas_json from "../../../json/Peliculas.json";
import "./Peliculas.css";
import { useNavigate, useParams } from "react-router-dom";

const Peliculas = () => {

  const navegar = useNavigate();

  return (
    <div>
      <h1>Esta es la página de Películas.</h1>
      {peliculas_json.Peliculas.length > 0
        ? peliculas_json.Peliculas.map((pelicula, indice, array) => {
            return (
              <div key={indice} onClick={ ()=> navegar(`/pelicula/${pelicula.id}`)}>
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
