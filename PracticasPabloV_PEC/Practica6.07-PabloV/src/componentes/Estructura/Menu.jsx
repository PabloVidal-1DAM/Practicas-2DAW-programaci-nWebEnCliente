import React from "react";
import { Link } from "react-router-dom";
import "./Menu.css";
import useAuth from "../hooks/useAuth";
const Menu = () => {
  const { sesionIniciada } = useAuth();
  return (
    <>
      <nav>
        <Link to={"/"} className="botonNav">
          Inicio
        </Link>
        {/* Si el usuario no inicia sesión, no puede acceder a las demás funcionalidades de la app */}
          <Link to={"/productos"} className="botonNav">
            Ver Productos
          </Link>
      </nav>
    </>
  );
};

export default Menu;
