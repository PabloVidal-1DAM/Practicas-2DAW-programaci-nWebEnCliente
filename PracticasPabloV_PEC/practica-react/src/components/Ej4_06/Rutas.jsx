import React from "react";
import { Routes, Route } from "react-router-dom";
import Inicio from "./Paginas/Inicio.jsx";
import Contacto from "./Paginas/Contacto.jsx";
import AcercaDe from "./Paginas/AcercaDe.jsx";
import Productos from "./Paginas/Productos.jsx";
import Error from "./Paginas/Error.jsx";

const Rutas = () => {
  return (
    <>
      <div>
        {/*Rutas creadas para el proyecto, enlazadas con componentes que representan las páginas.*/}
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/acerca-de" element={<AcercaDe />} />
          <Route path="/productos" element={<Productos />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </div>
    </>
  );
};

export default Rutas;
