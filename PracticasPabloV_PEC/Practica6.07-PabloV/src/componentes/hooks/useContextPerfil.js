import React, { useContext } from 'react'
import { contextoPerfiles } from '../context/ProveedorPerfil'

const useContextPerfil = () => {
    const contexto = useContext(contextoPerfiles)

    if(!contexto){
        throw new Error("El hook useContextPerfil debe ser usado por ProveedorPerfil");
    }
  return contexto;
}

export default useContextPerfil
