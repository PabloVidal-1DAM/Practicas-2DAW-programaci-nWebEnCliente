import React, { createContext, useEffect, useState } from "react";
import useDatos from "../hooks/useDatos";

const contextoModulos = createContext();
const ProveedorModulos = ({ children }) => {
    const {traerDatos, enviarDatos, borrarDatos, modificarDatos, cargando, error} = useDatos();
    const [modulos, setModulos] = useState([]);

    const cargarModulos = async() =>{
        try{
            const listaModulos = await traerDatos("modulos");
            setModulos(listaModulos);
        }catch(error){
            console.log("Ha ocurrido un error al cargar los modulos: ", error)
        }
    }

    const obtenerModuloPorId = async(id) =>{
      try{
        return await traerDatos(`modulos/${id}`)
      }catch(error){
        console.log("Error al cargar el modulo: ", error);
        throw error;
      }
    }

    useEffect(() =>{
        cargarModulos();
    }, [])

  const datos = {modulos, cargarModulos, cargando, error, obtenerModuloPorId};
  return (
    <contextoModulos.Provider value={datos}>
      {children}
    </contextoModulos.Provider>
  );
};

export default ProveedorModulos;
export { contextoModulos };
