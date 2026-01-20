import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Inicio from '../Inicio';
import Productos from '../Productos';
import IniciarSesion from '../IniciarSesion';
import CerrarSesion from "../CerrarSesion.jsx";
import Registrarse from "../Registrarse.jsx";

const Rutas = () => {
  return (
    <>
    <Routes>
        <Route path='/' element={<Inicio />} />
        <Route path='/productos' element={<Productos />} />
        <Route path="/iniciar-sesion" element={<IniciarSesion />} />
        <Route path="/cerrar-sesion" element={<CerrarSesion />} />
        <Route path="/registrarse" element={<Registrarse />} />
    </Routes>
    </>
  )
}

export default Rutas
