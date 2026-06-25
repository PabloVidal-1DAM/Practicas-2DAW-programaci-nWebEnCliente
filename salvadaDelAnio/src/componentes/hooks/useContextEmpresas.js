import React, { useContext } from "react";
import { contextoEmpresas } from "../context/ProveedorEmpresas";

const useContextEmpresas = () =>{
    const contexto = useContext(contextoEmpresas);
    if(!contexto){
        throw new Error("El contexto de empresas debe ser consumido en ProveedorEmpresas");
    }
    return contexto
}

export default useContextEmpresas;