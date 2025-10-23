import React from "react";
import { Link } from "react-router-dom";
import "./Menu.css";

const Menu = () => {
  return (
    <>
      <div>
        <nav>
          <Link to={"/"} className="botonNav">Inicio</Link>
          <Link to={"/contacto"} className="botonNav">Contacto</Link>
          <Link to={"/acerca-de"} className="botonNav">Acerca de</Link>
          <Link to={"/productos"} className="botonNav">Productos</Link>
        </nav>
      </div>
    </>
  );
};

export default Menu;
