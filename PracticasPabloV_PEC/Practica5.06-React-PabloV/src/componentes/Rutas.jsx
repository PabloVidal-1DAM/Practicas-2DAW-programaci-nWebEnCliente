import React from 'react'
import {Routes, Route} from "react-router-dom";
import RellenarDatos from "../componentes/paginas/RellenarDatos.jsx";
import MostrarDatos from "../componentes/paginas/MostrarDatos.jsx";
import Inicio from './paginas/Inicio.jsx';

const Rutas = ({ listaDiscos, setListaDiscos }) => {
  return (
    <Routes>
      <Route path='/' element={<Inicio />} />
      <Route 
        path='/rellenar' 
        element={<RellenarDatos setListaDiscos={setListaDiscos} listaDiscos={listaDiscos} />} 
      />
      <Route 
        path='/mostrar' 
        element={<MostrarDatos listaDiscos={listaDiscos} />} 
      />
    </Routes>
  );
};


export default Rutas
