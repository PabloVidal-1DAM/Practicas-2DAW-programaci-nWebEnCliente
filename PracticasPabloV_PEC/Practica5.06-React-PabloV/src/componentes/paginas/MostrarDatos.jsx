import React from 'react';
import Discos from '../Discos.jsx';

const MostrarDatos = ({listaDiscos}) => {
  return (
    <div>
      <Discos listaDiscos={listaDiscos}/>
    </div>
  )
}

export default MostrarDatos
