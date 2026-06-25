import React, { createContext } from "react";
import useDatos2 from "../hooks/useDatos2";

const contextoAsignaciones = createContext();
const ProveedorAsignaciones = ({ children }) => {

  const {traerDatos, cargando, errores} = useDatos2();

  const obtenerAsignacionesPorTrabajador = async(idTrabajador) =>{
    try{
      return await traerDatos(`asignaciones?trabajadorId=${idTrabajador}`);
    }catch(error){
      console.log("Error al obtener las asignaciones por trabajador: ", error);
      throw error;
    }
  }

    const datos = {obtenerAsignacionesPorTrabajador, cargando, errores};

  return (
    <contextoAsignaciones.Provider value={datos}>
        {children}
    </contextoAsignaciones.Provider>
  );
};

export default ProveedorAsignaciones;
export { contextoAsignaciones };
