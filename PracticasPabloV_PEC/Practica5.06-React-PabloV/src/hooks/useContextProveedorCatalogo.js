import React, { useContext } from 'react'
import { contextoCatalogo } from '../../../practicaExamenReact/src/componentes/context/ProveedorCatalogo';

const useContextProveedorCatalogo = () => {
    const contexto = useContext(contextoCatalogo);
    if(!contexto){
        throw new Error("El contexto de catalogo solo puede ser usado en ProveedorCatalogo");
    }
  return contexto;
}

export default useContextProveedorCatalogo
