import React from "react";
import { Routes, Route } from "react-router-dom";
import Inicio from "./Paginas/Inicio.jsx";
import Peliculas from "./Paginas/Peliculas.jsx";
import Interpretes from "./Paginas/Interpretes.jsx";
import Galeria from "./Paginas/Galeria.jsx";
import AcercaDe from "./Paginas/AcercaDe.jsx";
import Error from "./Paginas/Error.jsx";
import PeliculaDetalle from "./Paginas/PeliculaDetalle.jsx";
import FiltrarTitulo from "./Paginas/FiltrarTitulo.jsx";
import FiltrarInterprete from "./Paginas/FiltrarInterprete.jsx";
import FiltrarDirector from "./Paginas/FiltrarDirector.jsx";



const Rutas = () => {
  return (
    <>
      <div>
        {/*Rutas creadas para el proyecto, enlazadas con componentes que representan las páginas de este.*/}
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/peliculas" element={<Peliculas />} />
          {/*Ruta relativa para acceder a una pelicula con un id concreto.*/}
          <Route path="/pelicula/:id" element={<PeliculaDetalle />} />
          <Route path="/interpretes" element={<Interpretes />} />
          {/*Subrutas creadas para la ordenación de las cartelas.*/}
          {/*A la hora de cargarse estas rutas, irá a "Galería.jsx".*/}
          <Route path="/galeria" element={<Galeria />} >
            <Route path="galeria/filtrarTitulo" element={<FiltrarTitulo/>}/>
            <Route path="galeria/filtrarInterprete" element={<FiltrarInterprete/>}/>
            <Route path="galeria/filtrarDirector" element={<FiltrarDirector/>}/>
          </Route>

          <Route path="/acerca-de" element={<AcercaDe />} />
          {/*Ruta por defecto de la aplicación para manejar errores.*/}
          <Route path="*" element={<Error />} />
        </Routes>
      </div>
    </>
  );
};

export default Rutas;
