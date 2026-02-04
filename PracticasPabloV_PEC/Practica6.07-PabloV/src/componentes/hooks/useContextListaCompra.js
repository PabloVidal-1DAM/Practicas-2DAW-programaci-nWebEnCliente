import React, { useContext } from 'react'
import { contextoListaCompra } from '../context/ProveedorListaCompra'

const useContextListaCompra = () => {
    const contexto = useContext(contextoListaCompra);
    if(!contexto){
        throw new Error("El hook useContextListaCompra debe ser usado por ProveedorListaCompra");
    }
  return contexto;
}

export default useContextListaCompra
