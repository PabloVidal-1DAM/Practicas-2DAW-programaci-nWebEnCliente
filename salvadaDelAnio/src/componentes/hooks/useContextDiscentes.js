import React, { useContext } from "react";
import {contextoDiscentes} from "../context/ProveedorDiscentes";

const useContextDiscentes = () =>{
    const contexto = useContext(contextoDiscentes);

    if(!contexto){
        throw new Error("El hook useContextDiscentes debe de ser consumido en ProveedorDiscentes");
    }

    return contexto;
}

export default useContextDiscentes;