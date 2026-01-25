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
        {/* Si el usuario no inicia sesión, no puede acceder a las demás funcionalidades de la app */}
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
