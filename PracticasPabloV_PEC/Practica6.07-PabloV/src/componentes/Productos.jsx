import React from 'react'
import useProductos from './hooks/useProductos'

const Productos = () => {
  const {listaProductos} = useProductos();
  console.log(listaProductos);
  return (
    <div className='AccionesPrincipalesApp'>
      
    </div>
  )
}

export default Productos
