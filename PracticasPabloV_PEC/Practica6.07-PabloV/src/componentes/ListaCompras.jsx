import React from 'react'
import useContextListaCompra from './hooks/useContextListaCompra'

const ListaCompras = () => {
    const {listaCompra} = useContextListaCompra();
    if(!listaCompra){
        console.log("no hay datos en listCompra");
    }
    console.log(listaCompra);
  return (
    <div>
      
    </div>
  )
}

export default ListaCompras
