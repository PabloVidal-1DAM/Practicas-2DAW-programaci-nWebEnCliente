import React from 'react';
import Discos from '../Discos.jsx';

const MostrarDatos = ({listaDiscos, setListaDiscos}) => {
  return (
    <div>
      <Discos listaDiscos={listaDiscos} setListaDiscos={setListaDiscos}/>
    </div>
  )
}

export default MostrarDatos
