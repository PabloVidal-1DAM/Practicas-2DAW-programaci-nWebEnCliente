import React from 'react'
import {Routes, Route} from "react-router-dom";
import RellenarDatos from "../componentes/paginas/RellenarDatos.jsx";
import MostrarDatos from "../componentes/paginas/MostrarDatos.jsx";
import Inicio from './paginas/Inicio.jsx';

const Rutas = () => {
  return (
    <Routes>
      <Route path='/' element={<Inicio />} />
      <Route 
        path='/rellenar' 
        element={<RellenarDatos />} 
      />
      {/*Para mostrar y filtrar se comparte el mismo componente para mostrar la información pero distinta fuente de datos*/}
      <Route 
        path='/mostrar' 
        element={<MostrarDatos />} 
      />
      <Route
        path='/filtrado'
        element={<MostrarDatos /> } 
      />

      <Route path='/discos/:id' element={<RellenarDatos />} />
    </Routes>
  );
};


export default Rutas
