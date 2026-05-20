import React, { createContext, useEffect, useState } from "react";
import useAPI from "../hook/useAPI";
import { useNavigate } from "react-router-dom";

const contextoCatalogo = createContext();
const ProveedorCatalogo = ({ children }) => {
  const [discograficas, setDiscograficas] = useState([]);
  const [interpretes, setInterpretes] = useState([]);
  const [discos, setDiscos] = useState([]);

  const navegar = useNavigate();

  const {
    errorGlobal,
    cargando,
    borrarDatos,
    enviarDatos,
    modificarDatos,
    obtenerDatos,
  } = useAPI();

  const cargarTodo = async () => {
    try {
      const [datosDiscograficas, datosInterpretes, datosDiscos] =
        await Promise.all([
          obtenerDatos("http://localhost:3000/discograficas"),
          obtenerDatos("http://localhost:3000/interpretes"),
          obtenerDatos("http://localhost:3000/discos"),
        ]);

      setDiscograficas(datosDiscograficas);
      setInterpretes(datosInterpretes);
      setDiscos(datosDiscos);
    } catch (error) {
      console.error("Fallo al cargar el catálogo completo:", error);
    }
  };

  useEffect(() => {
    cargarTodo();
  }, []);

  const anyadirItem  = async(endpoint, nuevoItem) =>{
    await enviarDatos(`http://localhost:3000/${endpoint}`, nuevoItem);
    cargarTodo();
  }

  const borrarItem = async (endpoint) => {
    const confirmacion = window.confirm("Deseas borrar el item?");

    if (confirmacion) {
      try {
        await borrarDatos(`http://localhost:3000${endpoint}`);
        cargarTodo();
      } catch (error) {
        console.log("error al borrar", error);
      }
    }
  };

  const datos = {
    discograficas,
    interpretes,
    discos,

    errorGlobal,
    cargando,
    navegar,

    anyadirItem, // Para que puedan mandar los formularios su info al JSON server, AUNQUE HABRÍA QUE VERIFICARLOS.
    cargarTodo,
    borrarItem,
  };
  return (
    <>
      <contextoCatalogo.Provider value={datos}>
        {children}
      </contextoCatalogo.Provider>
    </>
  );
};

export default ProveedorCatalogo;
export { contextoCatalogo };
