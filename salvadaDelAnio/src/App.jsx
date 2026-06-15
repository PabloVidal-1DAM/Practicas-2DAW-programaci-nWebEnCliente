import React from "react";
import "./App.css";
import Contenedor from "./componentes/estructura/Contenedor.jsx";
import Cabecera from "./componentes/estructura/Cabecera.jsx";
import Principal from "./componentes/estructura/Principal.jsx";
import Pie from "./componentes/estructura/Pie.jsx";
import ProveedorDiscentes from "./componentes/context/ProveedorDiscentes.jsx";
import ProveedorMatriculas from "./componentes/context/ProveedorMatriculas.jsx";
import ProveedorPracticas from "./componentes/context/ProveedorPracticas.jsx";
import ProveedorModulos from "./componentes/context/ProveedorModulos.jsx";
import ProveedorDocentes from "./componentes/context/ProveedorDocentes.jsx";

function App() {
  return (
    <>

      <ProveedorDiscentes>
        <ProveedorMatriculas>
          <ProveedorPracticas>
            <ProveedorModulos>
              <ProveedorDocentes>
                <Contenedor>
                  <Cabecera />
                  <Principal />
                  <Pie />
                </Contenedor>
              </ProveedorDocentes>
            </ProveedorModulos>
          </ProveedorPracticas>
        </ProveedorMatriculas>
      </ProveedorDiscentes>
    </>
  );
}

export default App;
