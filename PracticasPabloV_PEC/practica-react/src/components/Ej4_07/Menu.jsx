import React from "react";
import { Link } from "react-router-dom";
import "./Menu.css";

const Menu = () => {
  return (
    <>
      <div>
        {/*Menú principal de mi app, con principales rutas definidas.*/}
        <nav>
          <Link to={"/"} className="botonNav">Inicio</Link>
          <Link to={"/peliculas"} className="botonNav">Peliculas</Link>
          <Link to={"/interpretes"} className="botonNav">Intérpretes</Link>
          <Link to={"/galeria"} className="botonNav">Galería</Link>
          <Link to={"/acerca-de"} className="botonNav">Acerca de</Link>
        </nav>
      </div>
    </>
  );
};

export default Menu;
