import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Contenedor from "./components/Ej4_07/Estructura/Contenedor.jsx";
import Cabecera from "./components/Ej4_07/Estructura/Cabecera.jsx";
import Menu from "./components/Ej4_07/Menu.jsx";
import Rutas from "./components/Ej4_07/Rutas.jsx";
import Contenido from "./components/Ej4_07/Estructura/Contenido.jsx";
import Pie from "./components/Ej4_07/Estructura/Pie.jsx";


function App() {
  return (
    <>
    {/*Sin BrowserRouter no me funcionaban las rutas, no se pintaba el Menú.jsx.*/}
      <BrowserRouter>
        <Contenedor>
          <Cabecera/>
          <Menu/>
          <Contenido>
            <Rutas/>
          </Contenido>
          <Pie/>
        </Contenedor>
      </BrowserRouter>
    </>
  );
}

export default App;
