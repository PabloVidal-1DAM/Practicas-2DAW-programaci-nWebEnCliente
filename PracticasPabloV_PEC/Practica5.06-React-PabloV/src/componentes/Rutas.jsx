import React from 'react'
import {Routes, Route} from "react-router-dom";
import RellenarDatos from "../componentes/paginas/RellenarDatos.jsx";
import MostrarDatos from "../componentes/paginas/MostrarDatos.jsx";
import Inicio from './paginas/Inicio.jsx';

const Rutas = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Inicio />} />
        <Route path='/rellenar' element={<RellenarDatos />} />
        <Route path='/mostrar' element={<MostrarDatos />} />
      </Routes>
    </div>
  )
}

export default Rutas
