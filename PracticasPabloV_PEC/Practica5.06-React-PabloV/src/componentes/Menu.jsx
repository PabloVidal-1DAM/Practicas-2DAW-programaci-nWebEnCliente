import React from 'react';
import { Link } from 'react-router-dom';
import "./Menu.css";

const Menu = () => {
  return (
    <div>
      <nav>
        <Link to={"/"} className='botonNav'>Rellenar Datos</Link>
        <Link to={"/mostrar"} className='botonNav'>Mostrar Datos</Link>
      </nav>
    </div>
  )
}

export default Menu
