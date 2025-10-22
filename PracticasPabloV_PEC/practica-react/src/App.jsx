import { useState } from "react";
import "./App.css";
import Contenedor from "./components/Ej4_05/Contenedor";
import Interpretes from "./components/Ej4_05/Interpretes";
import Peliculas from "./components/Ej4_05/Peliculas";
import Taquilla from "./components/Ej4_05/Taquilla";

function App() {
  return (
    <>
      <Contenedor>
        <Peliculas />

        <Interpretes />
        {/*Nuevo componente que pide el ejercicio para mostrar la taquilla de la película.*/}
        <Taquilla/>
      </Contenedor>
    </>
  );
}

export default App;
