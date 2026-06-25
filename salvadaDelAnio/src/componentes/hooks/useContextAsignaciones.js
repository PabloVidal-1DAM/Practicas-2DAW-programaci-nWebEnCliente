import React, { useContext } from "react";
import { contextoAsignaciones } from "../context/ProveedorAsignaciones";

const useContextAsignaciones = () =>{
    const contexto = useContext(contextoAsignaciones);
    if(!contexto){
        throw new Error("El contexto de asignaciones  debe ser consumido en ProveedorAsignaciones");
    }
    return contexto
}

export default useContextAsignaciones;