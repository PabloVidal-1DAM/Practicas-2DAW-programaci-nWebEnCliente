import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Menu from "./components/Ej4_06/Menu.jsx";
import Rutas from "./components/Ej4_06/Rutas.jsx";

function App() {
  return (
    <>
    {/*Sin BrowserRouter no me funcionaban las rutas, no se pintaba el Menú.jsx.*/}
      <BrowserRouter>
        <h2>Practica 4.06: Rutas en React</h2>
        <Menu />
        <Rutas />
      </BrowserRouter>
    </>
  );
}

export default App;
