import React from "react";
import { Link } from "react-router-dom";
import "./Menu.css";
const Menu = () => {
  return (
    <>
      <nav>
        <Link to={"/"} className="botonNav">
          Inicio
        </Link>
        <Link to={"/productos"} className="botonNav">
          Ver Productos
        </Link>
      </nav>
    </>
  );
};

export default Menu;
