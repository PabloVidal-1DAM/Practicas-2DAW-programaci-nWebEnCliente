import React from 'react'
import "../componentes/Estructura/Menu.css";
import { Link } from 'react-router-dom';

const Acciones = () => {
  return (
    <div>
      <Link to={"productos/filtrar"} className='botonNav'>Filtrar</Link>
      <Link to={"productos/ordenar"} className='botonNav'>Ordenar</Link>
    </div>
  )
}

export default Acciones
