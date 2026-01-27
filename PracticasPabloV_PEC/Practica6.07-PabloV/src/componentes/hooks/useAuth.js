import React, { useContext } from 'react'
import { contextoSesion } from '../context/ProveedorSesion';

const useAuth = () => {

    const contexto = useContext(contextoSesion);

    if(!contexto){
        throw new Error("Este hook debe ser usado en ProveedorSesion");
    }

    return contexto;
}

export default useAuth
