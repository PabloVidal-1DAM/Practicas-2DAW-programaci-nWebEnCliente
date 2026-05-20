import React from 'react'
import { useContext } from 'react';
import { contextoCatalogo } from '../context/ProveedorCatalogo';

const useContextCatalogo = () => {
    const contexto = useContext(contextoCatalogo);
    if(!contexto){
        throw new Error("El contexto catalogo solo puede usarse en el ProveedorCatalogo");
    }
  return contexto;
}

export default useContextCatalogo
