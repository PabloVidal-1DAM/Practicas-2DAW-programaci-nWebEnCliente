import React from 'react'
import useContextListaCompra from './hooks/useContextListaCompra'
import ListaCompra from './ListaCompra';
import "./ListaCompras.css";

const ListaCompras = () => {
    const {listaCompra} = useContextListaCompra();
  return (
    <div className='listas'>
      {listaCompra.length > 0 ? listaCompra.map((lista) =>{
        return <ListaCompra key={lista.id} lista={lista} />
      })
       : "No hay listas de la compra que mostrar"}
    </div>
  )
}

export default ListaCompras
