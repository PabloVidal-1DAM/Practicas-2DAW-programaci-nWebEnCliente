import React from "react";
import { Link } from "react-router-dom";
import "./Menu.css";
import useSesion from "../hooks/useSesion";
const Menu = () => {
  const { sesionIniciada } = useSesion();
  return (
    <>
      <nav>
        <Link to={"/"} className="botonNav">
          Inicio
        </Link>
        {sesionIniciada && (
          <Link to={"/productos"} className="botonNav">
            Ver Productos
          </Link>
        )}
      </nav>
    </>
  );
};

export default Menu;
