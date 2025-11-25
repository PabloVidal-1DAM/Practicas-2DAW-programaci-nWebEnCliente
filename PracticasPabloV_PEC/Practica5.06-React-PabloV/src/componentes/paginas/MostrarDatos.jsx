import React from 'react';
import Discos from '../Discos.jsx';

// Este componente llama a "Discos.jsx", lo he hecho así para que sea más visual - Que muestro? = Discos.
// A ese componente se le pasa el estado de los datos y el setter.
const MostrarDatos = ({listaDiscos, setListaDiscos}) => {
  return (
    <div>
      <Discos listaDiscos={listaDiscos} setListaDiscos={setListaDiscos}/>
    </div>
  )
}

export default MostrarDatos
