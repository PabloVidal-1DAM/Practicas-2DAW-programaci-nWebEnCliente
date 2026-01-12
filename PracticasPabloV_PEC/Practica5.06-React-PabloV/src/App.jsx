import { useState } from "react";
import { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Contenedor from "./componentes/Estructura/Contenedor.jsx";
import Cabecera from "./componentes/Estructura/Cabecera.jsx";
import Contenido from "./componentes/Estructura/Contenido.jsx";
import Pie from "./componentes/Estructura/Pie.jsx";
import Rutas from "./componentes/Rutas";
import Menu from "./componentes/Menu";
import Proveedor from "./componentes/Proveedor";

function App() {
  return (
    <BrowserRouter>
      <Contenedor>
        <Cabecera />
        <Menu />
        <Contenido>
          <Proveedor>
            <Rutas />
          </Proveedor>
        </Contenido>

        <Pie />
      </Contenedor>
    </BrowserRouter>
  );
}

export default App;
