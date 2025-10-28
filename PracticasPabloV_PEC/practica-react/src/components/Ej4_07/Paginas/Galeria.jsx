import React from "react";
import { Link, Outlet } from "react-router-dom";
import Contenedor from "../Estructura/Contenedor";

const Galeria = () => {
  return (
    <div>
      <h1>Esta es la página de Galería.</h1>
      <nav>
        {/*Enlaces referentes a las subrutas.*/}
        <Link to={"galeria/filtrarTitulo"} className="botonNav">Filtrar Cartelas por Título</Link>
        <Link to={"galeria/filtrarInterprete"} className="botonNav">Filtrar Cartelas por Interprete</Link>
        <Link to={"galeria/filtrarDirector"} className="botonNav">Filtrar Cartelas por Director</Link>
      </nav>

      <div className="contenido">
        <Contenedor>
          {/*Estas subrutas se dibujarán dentro del elemento <Outlet/>.*/}
          <Outlet />
        </Contenedor>
      </div>
    </div>
  );
};

export default Galeria;
