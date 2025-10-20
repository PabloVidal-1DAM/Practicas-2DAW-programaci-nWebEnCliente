import { useState } from "react";
import "./App.css";
import Contenedor from "./components/Ejercicio1/Contenedor";
import Interprete from "./components/Ejercicio2/Interprete";
import Pelicula from "./components/Ejercicio3/Pelicula";
import Interpretes from "./json/Interpretes.json";
import Peliculas from "./json/Peliculas.json";

function App() {
  const datosInterpretes = Interpretes;
  const datosPeliculas = Peliculas;
  return (
    <>
      <Contenedor>
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

        {datosInterpretes.Interpretes.map((actor, index) => (
          <Interprete key={index} nombre={actor.nombre} src={actor.src}>
            {actor.descripcion}
          </Interprete>
        ))}
      </Contenedor>
    </>
  );
}

export default App;
