import React from 'react';
import {Link} from "react-router-dom";

const Menu = () => {
  return (
    <div>
        <nav>
            <Link to={"/"}>Inicio</Link>
            <Link to={"/contacto"}>Contacto</Link>
            <Link to={"/acerca-de"}>Acerda de</Link>
            <Link to={"/productos"}>Productos</Link>
        </nav>
    </div>
  )
}

export default Menu
