import React, { createContext, useEffect, useState } from "react";
import useDatos from "../hooks/useDatos";

const contextoDocentes = createContext();
const ProveedorDiscentes = ({children}) =>{
    const {traerDatos, enviarDatos, borrarDatos, modificarDatos, cargando, error} = useDatos();
    const [docentes, setDocentes] = useState([]);

    const cargarDocentes = async() =>{
        try{
            const listaDocentes = await traerDatos("docentes");
            setDocentes(listaDocentes);
        }catch(error){
            console.log("Ha ocurrido un error al cargar los docentes", error)
        }
        

    }

    useEffect(() =>{
        cargarDocentes();
    }, [])

    const datos = {docentes, cargarDocentes, cargando, error};
    return (
        <contextoDocentes.Provider value={datos}>
            {children}
        </contextoDocentes.Provider>
    );
}

export default ProveedorDiscentes;
export {contextoDocentes}