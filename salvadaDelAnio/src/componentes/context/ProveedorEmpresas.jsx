import React, { createContext, useEffect, useState } from "react";
import useDatos2 from "../hooks/useDatos2";

const contextoEmpresas = createContext();
const ProveedorEmpresas = ({children}) =>{
    const {traerDatos, cargando, errores} = useDatos2();

    const [empresas, setEmpresas] = useState([]);

    const cargarEmpresas = async() =>{
        try{
            const listaEmpresas = await traerDatos("empresas");
            setEmpresas(listaEmpresas);
        }catch(error){
            console.log("Error al cargar la empresa: ", error);
        }
    }

    useEffect(() =>{
        cargarEmpresas();
    }, [])

    const datos = {empresas, cargando, errores};
    return(
        <contextoEmpresas.Provider value={datos}>
            {children}
        </contextoEmpresas.Provider>
    );
}

export default ProveedorEmpresas;
export {contextoEmpresas};