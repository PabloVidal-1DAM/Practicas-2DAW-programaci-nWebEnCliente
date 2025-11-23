import React from 'react';
import { Link } from 'react-router-dom';
import "./Menu.css";

const Menu = () => {
  return (
    <div>
      <nav>
        <Link to={"/"} className='botonNav'>Inicio</Link>
        <Link to={"/rellenar"} className='botonNav'>Insertar Disco</Link>
        <Link to={"/mostrar"} className='botonNav'>Listar Disco/s</Link>
      </nav>
    </div>
  )
}

export default Menu
