import React from 'react'
import Acciones from "../componentes/Acciones.jsx";
import { Outlet } from 'react-router-dom';

const Productos = () => {
  return (
    <div className='AccionesPrincipalesApp'>
      <h2>Gestión de la lista</h2>
      <Acciones />
      <Outlet />
    </div>
  )
}

export default Productos
