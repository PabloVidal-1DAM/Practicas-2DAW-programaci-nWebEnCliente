import React from "react";
import PeliculasProvider from "./contexto/ContextoPeliculas.jsx";
import Peliculas from "./components/Peliculas.jsx";
import Detalle from "./components/Detalle.jsx";
import "./components/App.css";

function App() {
  return (
    <div>
      <h2>API Star Wars.</h2>
      {/* Envolvemos todo con el Provider */}
      <PeliculasProvider>
        <div id="contenido">
          <Peliculas />
          <Detalle />
        </div>
      </PeliculasProvider>
    </div>
  );
}

export default App;