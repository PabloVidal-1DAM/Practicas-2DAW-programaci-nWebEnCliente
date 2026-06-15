import React, { useContext } from "react";
import {contextoDocentes} from "../context/ProveedorDocentes";

const useContextDocentes = () =>{
    const contexto = useContext(contextoDocentes);

    if(!contexto){
        throw new Error("El hook useContextDocentes debe de ser consumido en ProveedorDocentes");
    }

    return contexto;
}

export default useContextDocentes;