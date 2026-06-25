import React, { createContext } from "react";
import useDatos2 from "../hooks/useDatos2";

const contextoProyectos = createContext();
const ProveedorProyectos = ({ children }) => {

  const {traerDatos, cargando, errores} = useDatos2();

  const obtenerProyectoPorId = async(id)=>{
    try{
      return await traerDatos(`proyectos/${id}`);
    }catch(error){
      console.log("Error al obtener el proyecto: ", error);
      throw error;
    }
  }

    const datos = {obtenerProyectoPorId, cargando, errores};

  return (
    <contextoProyectos.Provider value={datos}>
        {children}
    </contextoProyectos.Provider>
  );
};

export default ProveedorProyectos;
export { contextoProyectos };
