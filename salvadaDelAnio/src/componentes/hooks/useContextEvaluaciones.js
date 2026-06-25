import React, { useContext } from "react";
import { contextoEvaluaciones } from "../context/ProveedorEvaluaciones";

const useContextEvaluaciones = () =>{
    const contexto = useContext(contextoEvaluaciones);
    if(!contexto){
        throw new Error("El contexto evaluaciones debe ser consumido en ProveedorEvaluaciones");
    }
    return contexto;
}

export default useContextEvaluaciones;