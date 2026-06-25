import React, { createContext, useContext, useEffect, useState } from "react";
import useDatos2 from "../hooks/useDatos2";

const contextoTrabajadores = createContext();
const ProveedorTrabajadores = ({ children }) => {

  const {traerDatos, cargando, errores} = useDatos2();

  const [trabajadores, setTrabajadores] = useState([]);
  const cargarTrabajadores = async() =>{
    try{
      const listaTrabajadores = await traerDatos("trabajadores");
      setTrabajadores(listaTrabajadores);
    }catch(error){
      console.log("Error al cargar los trabajadores: ", error);
    }
  }

  const obtenerTrabajadoresPorEmpresa = async(idEmpresa) =>{
    try{
      return await traerDatos(`trabajadores?empresaId=${idEmpresa}`);
    }catch(error){
      console.log("Error al obtener los trabajadores por empresa: ", error);
      throw error;
    }
  }

  useEffect(() =>{
    cargarTrabajadores();
  }, [])

    const datos = {obtenerTrabajadoresPorEmpresa, trabajadores, cargando, errores};

  return (
    <contextoTrabajadores.Provider value={datos}>
        {children}
    </contextoTrabajadores.Provider>
  );
};

export default ProveedorTrabajadores;
export { contextoTrabajadores };
