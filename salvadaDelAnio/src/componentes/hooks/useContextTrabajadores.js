import React, { useContext } from "react";
import { contextoTrabajadores } from "../context/ProveedorTrabajadores";

const useContextTrabajadores = () =>{
    const contexto = useContext(contextoTrabajadores);
    if(!contexto){
        throw new Error("El contexto de trabajadores debe ser consumido en ProveedorTrabajadores");
    }
    return contexto
}

export default useContextTrabajadores;