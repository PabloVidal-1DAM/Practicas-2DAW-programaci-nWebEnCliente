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
      await obtenerDiscos();
    } catch (error) {
      throw error;
    }
  };

  const eliminarDisco = async (id) => {
    try {
      const url = `${URL}/${id}`;
      const datos = await borrar(url);
      await obtenerDiscos();
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
    eliminarDisco,
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
