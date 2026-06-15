import React, { useContext } from "react";
import {contextoMatriculas} from "../context/ProveedorMatriculas";

const useContextMatriculas = () =>{
    const contexto = useContext(contextoMatriculas);

    if(!contexto){
        throw new Error("El hook useContextMatriculas debe de ser consumido en ProveedorMatriculas");
    }

    return contexto;
}

export default useContextMatriculas;