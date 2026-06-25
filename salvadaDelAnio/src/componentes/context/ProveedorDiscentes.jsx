import React, { createContext, useEffect, useState } from "react";
import useDatos from "../hooks/useDatos";

const contextoDiscentes = createContext();
const ProveedorDiscentes = ({children}) =>{

  const {cargando, errores, traerDatos, enviarDatos, modificarDatos, borrarDatos} = useDatos();
  const [discentes, setDiscentes] = useState([]);

  const cargarDiscentes = async() =>{
    try{
      const listaDiscentes = await traerDatos("discentes");
      setDiscentes(listaDiscentes);
    }catch(error){
      console.log("Error al cargar discentes", error);
    }
  }

  useEffect(() =>{
    cargarDiscentes();
  }, []);

  const datos = {cargando, errores, discentes};
  return (
    <contextoDiscentes.Provider value={datos}>
      {children}
    </contextoDiscentes.Provider>
  );
}

export default ProveedorDiscentes;
export {contextoDiscentes}