import React, { createContext, useEffect, useState } from "react";
import useDatos from "../hooks/useDatos";

const contextoPracticas = createContext();
const ProveedorPracticas = ({children}) =>{
    const {traerDatos, enviarDatos, modificarDatos, borrarDatos, cargando, error} = useDatos();
    const [practicas, setPracticas] = useState([]);

    const cargarPracticas = async() =>{
        try{
            const listaPracticas = await traerDatos("practicas");
            setPracticas(listaPracticas);
        }catch(error){
            console.log("Ha ocurrido un error al cargar las prácticas: ", error);
        }
    }

    useEffect(() =>{
        cargarPracticas();
    }, [])

    const datos = {practicas, cargarPracticas, cargando, error};
    return (
        <contextoPracticas.Provider value={datos}>
            {children}
        </contextoPracticas.Provider>
    );
}

export default ProveedorPracticas;
export {contextoPracticas}