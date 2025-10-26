import React from "react";
import { Routes, Route } from "react-router-dom";
import Inicio from "./Paginas/Inicio.jsx";
import AcercaDe from "./Paginas/AcercaDe.jsx";
import Error from "./Paginas/Error.jsx";

const Rutas = () => {
  return (
    <>
      <div>
        {/*Rutas creadas para el proyecto, enlazadas con componentes que representan las páginas.*/}
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/peliculas" element={<Peliculas />} />
          <Route path="/interpretes" element={<Interpretes />} />
          <Route path="/galeria" element={<Galería />} />
          <Route path="/acerca-de" element={<AcercaDe />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </div>
    </>
  );
};

export default Rutas;
