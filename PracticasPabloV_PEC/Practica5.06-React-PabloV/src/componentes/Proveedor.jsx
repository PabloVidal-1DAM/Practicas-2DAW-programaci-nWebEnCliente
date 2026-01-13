import React, { useState, createContext, useEffect } from "react";
import useDiscos from "../hooks/useDiscos.js";

const contextoDiscos = createContext();

const Proveedor = ({ children }) => {
  const [listaDiscos, setListaDiscos] = useState([]); 
  const [discosFiltrados, setDiscosFiltrados] = useState([]);
  const [discoBorrado, setDiscoBorrado] = useState([]);

  const {obtenerDatos, cargando, guardarDatos, editarPUT, editarPATCH, borrar} = useDiscos();

  const URL = "http://localhost:5000/discos";

  // Aquí irán las peticiones a la API, que son heredadas del hook useDiscos.

  const obtenerDiscos = async () => {
    try {
      const datos = await obtenerDatos(URL);
      setListaDiscos(datos);
    } catch (error) {
      throw error;
    }
  };

  useEffect(()=>{
    obtenerDiscos();
  }, [])



  const datos = {
    listaDiscos,
    setListaDiscos,
    discosFiltrados,
    setDiscosFiltrados,
    discoBorrado,
    setDiscoBorrado,
    cargando,
    guardarDatos,
    editarPUT,
    editarPATCH,
    borrar,
    URL
    
  };
  return (
    <>
      <contextoDiscos.Provider value={datos}>
        {children}
      </contextoDiscos.Provider>
    </>
  );
};

export default Proveedor;
export { contextoDiscos };
