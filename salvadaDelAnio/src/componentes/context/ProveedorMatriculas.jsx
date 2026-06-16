import React, { createContext, useEffect, useState } from "react";
import useDatos from "../hooks/useDatos";

const contextoMatriculas = createContext();
const ProveedorMatriculas = ({ children }) => {
    const {traerDatos, enviarDatos, modificarDatos, borrarDatos, cargando, error} = useDatos();
    const [matriculas, setMatriculas] = useState([]);

    const cargarMatriculas = async() =>{
        try{
            const listaMatriculas = await traerDatos("matriculas");
            setMatriculas(listaMatriculas);
        }catch(error){
            console.log("Error al cargar las matriculas", error)
        }
    }

    useEffect(() =>{
        cargarMatriculas();
    }, []);

  const datos = {matriculas, cargarMatriculas, error, cargando};
  return (
    <contextoMatriculas.Provider value={datos}>
      {children}
    </contextoMatriculas.Provider>
  );
};

export default ProveedorMatriculas;
export { contextoMatriculas };
