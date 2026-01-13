import React, { useState, createContext, useEffect } from "react";
import useAPI from "../hooks/useAPI.js";

const contextoDiscos = createContext();

const Proveedor = ({ children }) => {
  const [listaDiscos, setListaDiscos] = useState([]);
  const [discosFiltrados, setDiscosFiltrados] = useState([]);
  const [discoBorrado, setDiscoBorrado] = useState([]);

  const {
    obtenerDatos,
    cargando,
    guardarDatos,
    editarPUT,
    editarPATCH,
    borrar,
  } = useAPI();

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

  useEffect(() => {
    obtenerDiscos();
  }, []);

  const guardarDisco = async (body) => {
    try {
      const datos = await guardarDatos(URL, body);
      obtenerDiscos();
    } catch (error) {
      throw error;
    }
  };

  const datos = {
    listaDiscos,
    setListaDiscos,
    discosFiltrados,
    setDiscosFiltrados,
    discoBorrado,
    setDiscoBorrado,
    
    cargando,
    guardarDisco,
    editarPUT,
    editarPATCH,
    borrar,
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
