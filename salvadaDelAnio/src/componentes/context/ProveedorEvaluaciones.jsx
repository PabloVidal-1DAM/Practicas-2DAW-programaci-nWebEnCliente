import React, { createContext } from "react";
import useDatos2 from "../hooks/useDatos2"
const contextoEvaluaciones = createContext();
const ProveedorEvaluaciones = ({ children }) => {

    const {traerDatos, modificarDatos, cargando, errores} = useDatos2();

    const obtenerEvaluacionesPorAsignacion = async(idAsignacion) =>{
        try{
            return await traerDatos(`evaluaciones?asignacionId=${idAsignacion}`);
        }catch(error){
            console.log("Ha ocurrido un erro al cargar las evalaciones: ", error);
            throw error;
        }
    }

    const modificarEvaluaciones = async(envaluacionModificada) =>{
      try{
        await modificarDatos(`evaluaciones/${evaluacionModificada.id}`, evaluacionModificada);
      }catch(error){
        throw error;
      }
    }

  const datos = {obtenerEvaluacionesPorAsignacion, modificarEvaluaciones, cargando, errores};
  return (
    <contextoEvaluaciones.Provider value={datos}>
      {children}
    </contextoEvaluaciones.Provider>
  );
};

export default ProveedorEvaluaciones;
export {contextoEvaluaciones}
