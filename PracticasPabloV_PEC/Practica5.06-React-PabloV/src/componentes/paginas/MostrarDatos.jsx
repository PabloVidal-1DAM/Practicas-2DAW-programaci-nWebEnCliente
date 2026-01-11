import React, { useContext } from 'react';
import Discos from '../Discos.jsx';

// Este componente llama a "Discos.jsx", lo he hecho así para que sea más visual - Que muestro? = Discos.
// A ese componente se le pasa el estado de los datos y el setter.
const MostrarDatos = () => {
  return (
    <div>
      <Discos />
    </div>
  )
}

export default MostrarDatos
