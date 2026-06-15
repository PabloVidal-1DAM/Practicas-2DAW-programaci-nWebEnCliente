import React, { useContext } from "react";
import {contextoPracticas} from "../context/ProveedorPracticas";

const useContextPracticas = () =>{
    const contexto = useContext(contextoPracticas);

    if(!contexto){
        throw new Error("El hook useContextPracticas debe de ser consumido en ProveedorPracticas");
    }

    return contexto;
}

export default useContextPracticas;