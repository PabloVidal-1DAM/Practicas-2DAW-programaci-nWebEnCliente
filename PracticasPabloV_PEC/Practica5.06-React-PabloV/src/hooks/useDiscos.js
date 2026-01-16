import React, { useContext } from 'react'
import {contextoDiscos} from "../componentes/Proveedor.jsx"

const useDiscos = () => {
    const contexto = useContext(contextoDiscos);

    if (!contexto){
        throw new Error("El hook useDiscos soo puede ser usado en Proveedor.jsx");
    }

    return contexto;
}

export default useDiscos;