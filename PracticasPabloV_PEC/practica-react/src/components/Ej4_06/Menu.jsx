import React from "react";
import { Link } from "react-router-dom";
import "./Menu.css";

const Menu = () => {
  return (
    <>
      <div>
        {/*Links para ir accediendo a las distintas rutas definidas en "Rutas.jsx".*/}
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
