import React from "react";
import "./App.css";
import Contenedor from "./componentes/estructura/Contenedor.jsx";
import Cabecera from "./componentes/estructura/Cabecera.jsx";
import Principal from "./componentes/estructura/Principal.jsx";
import Pie from "./componentes/estructura/Pie.jsx";
import ProveedorDiscentes from "./componentes/context/ProveedorDiscentes.jsx";
import ProveedorDocentes from "./componentes/context/ProveedorDocentes.jsx";
import ProveedorMatriculas from "./componentes/context/ProveedorMatriculas.jsx";
import ProveedorModulos from "./componentes/context/ProveedorModulos.jsx";
import ProveedorPracticas from "./componentes/context/ProveedorPracticas.jsx";

function App() {
  return (
    <>
      <ProveedorPracticas>
        <ProveedorModulos>
          <ProveedorMatriculas>
            <ProveedorDocentes>
              <ProveedorDiscentes>
                <Contenedor>
                  <Cabecera />
                  <Principal />
                  <Pie />
                </Contenedor>
              </ProveedorDiscentes>
            </ProveedorDocentes>
          </ProveedorMatriculas>
        </ProveedorModulos>
      </ProveedorPracticas>
    </>
  );
}

export default App;
