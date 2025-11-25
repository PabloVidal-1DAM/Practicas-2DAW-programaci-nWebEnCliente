import React from 'react'
import {Routes, Route} from "react-router-dom";
import RellenarDatos from "../componentes/paginas/RellenarDatos.jsx";
import MostrarDatos from "../componentes/paginas/MostrarDatos.jsx";
import Inicio from './paginas/Inicio.jsx';

// Se pasa como props los estados que compartirá más de un elemento de las rutas para funcionar correctamente.
const Rutas = ({ listaDiscos, setListaDiscos, discosFiltrados, setDiscosFiltrados, discoBorrado, setDiscoBorrado }) => {
  return (
    <Routes>
      <Route path='/' element={<Inicio />} />
      <Route 
        path='/rellenar' 
        element={<RellenarDatos setListaDiscos={setListaDiscos} listaDiscos={listaDiscos} 
        discosFiltrados={discosFiltrados} setDiscosFiltrados={setDiscosFiltrados}
        discoBorrado={discoBorrado} setDiscoBorrado={setDiscoBorrado} />} 
      />
      {/*Para mostrar y filtrar se comparte el mismo componente para mostrar la información pero distinta fuente de datos*/}
      <Route 
        path='/mostrar' 
        element={<MostrarDatos listaDiscos={listaDiscos} setListaDiscos={setListaDiscos} />} 
      />
      <Route
        path='/filtrado'
        element={<MostrarDatos listaDiscos={discosFiltrados} /> } 
      />
    </Routes>
  );
};


export default Rutas
