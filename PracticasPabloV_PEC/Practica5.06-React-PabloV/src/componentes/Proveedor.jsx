import React, { useState, createContext, useEffect } from "react";
import useAPI from "../hooks/useAPI.js";

const contextoDiscos = createContext();

const Proveedor = ({ children }) => {
  const [listaDiscos, setListaDiscos] = useState([]);
  const [discosFiltrados, setDiscosFiltrados] = useState([]);
  const [discosEditados, setDiscosEditados] = useState([]);
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

  // Aquí irán las peticiones a la API, que son heredadas del hook useAPI.

  const obtenerDiscos = async () => {
    try {
      const datos = await obtenerDatos(URL);
      setListaDiscos(datos);
    } catch (error) {
      throw error;
    }
  };

  // Usada para poder obtener el disco que a seleccionado el usuario a modificar.
  const obtenerDiscoPorId = async (id) =>{
    try{
      const url = `${URL}/${id}`;
      const datos = await obtenerDatos(url);
      if(datos){
        return datos;
      }else{
        throw new Error(`No se ha podido obtener ningún dato por id.`);
      }
    } catch(error){
      throw error;
    }
  }

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

  const editarDisco = async (id, body) => {
  try {
    const url = `${URL}/${id}`;
    const datos = await editarPUT(url, body); 
    await obtenerDiscos();
  } catch (error) {
    throw error;
  }
};


  // Para poder filtrar, se pasa el formulario para acceder al input text que contiene el valor a filtrar y
  // el estado "listadoDiscos" que contiene todos los discos guardados en ese momento.
  const filtrarDisco = (formulario, listadoDiscos) => {
    let errores = [];

    if (formulario.filtrar.value === "" || listaDiscos.length === 0) {
      errores = [
        ...errores,
        `No hay o no se ha puesto información para filtrar.`,
      ];
      setError(errores);
    } else {
      const discoFiltrado = listadoDiscos.filter((disco, indice, array) => {
        return disco.nombre === formulario.filtrar.value;
      });

      setDiscosFiltrados(discoFiltrado);
    }
  };

  const datos = {
    listaDiscos,
    setListaDiscos,
    discosFiltrados,
    setDiscosFiltrados,
    discoBorrado,
    setDiscoBorrado,
    discosEditados,
    setDiscosEditados,

    cargando,
    guardarDisco,
    obtenerDiscoPorId,
    editarPUT,
    editarPATCH,
    eliminarDisco,
    editarDisco,
    filtrarDisco
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
