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

    const obtenerPracticasPorMatricula = async(idMatricula) =>{
        try{
            return await traerDatos(`practicas?matriculaId=${idMatricula}`);
        }catch(error){
            console.log("Error al cargar las practicas por matriculas: ", error);
            throw error;
        }
    }

    const modificarPractica = async(practicaModificada) =>{
        try{
            await modificarDatos(`practicas/${practicaModificada.id}`, practicaModificada);
            await cargarPracticas();
        }catch(error){
            console.log("Error al modificar la practica: ", error);
            throw error;
        }
    }

    useEffect(() =>{
        cargarPracticas();
    }, [])

    const datos = {practicas, cargarPracticas, cargando, error, obtenerPracticasPorMatricula, modificarPractica};
    return (
        <contextoPracticas.Provider value={datos}>
            {children}
        </contextoPracticas.Provider>
    );
}

export default ProveedorPracticas;
export {contextoPracticas}