import React, { createContext, useEffect, useState } from "react";
import useDatos from "../hooks/useDatos";

const contextoDiscentes = createContext();
const ProveedorDiscentes = ({children}) =>{

    const {traerDatos, borrarDatos, enviarDatos, modificarDatos, cargando, errores} = useDatos();
    const datos = {
    
    };

    return (
        <contextoDiscentes.Provider value={datos}>
            {children}
        </contextoDiscentes.Provider>
    );
}

export default ProveedorDiscentes;
export {contextoDiscentes};