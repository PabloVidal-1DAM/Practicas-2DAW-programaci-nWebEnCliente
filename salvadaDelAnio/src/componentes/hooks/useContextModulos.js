import React, { useContext } from "react";
import {contextoModulos} from "../context/ProveedorModulos";

const useContextModulos = () =>{
    const contexto = useContext(contextoModulos);

    if(!contexto){
        throw new Error("El hook useContextModulos debe de ser consumido en ProveedorModulos");
    }

    return contexto;
}

export default useContextModulos;