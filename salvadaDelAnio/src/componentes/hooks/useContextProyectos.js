import React, { useContext } from "react";
import { contextoProyectos } from "../context/ProveedorProyectos";

const useContextProyectos = () =>{
    const contexto = useContext(contextoProyectos);
    if(!contexto){
        throw new Error("El contexto de proyectps  debe ser consumido en ProveedorProyectos");
    }
    return contexto;
}

export default useContextProyectos;