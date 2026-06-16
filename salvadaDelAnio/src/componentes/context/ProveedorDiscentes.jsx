import React, { createContext, useEffect, useState } from "react";
import useDatos from "../hooks/useDatos";

const contextoDiscentes = createContext();
const ProveedorDiscentes = ({ children }) => {
  const {
    traerDatos,
    borrarDatos,
    enviarDatos,
    modificarDatos,
    cargando,
    error
  } = useDatos();

  const [discentes, setDiscentes] = useState([]);
  const cargarDiscentes = async () => {
    try {
      const listaDiscentes = await traerDatos("discentes");
      setDiscentes(listaDiscentes);
    } catch (error) {
      console.log("Error al cargar los discentes: ", error);
    }
  };

  useEffect(() => {
    cargarDiscentes();
  }, []);

  const datos = { discentes, cargando, errores, cargarDiscentes };

  return (
    <contextoDiscentes.Provider value={datos}>
      {children}
    </contextoDiscentes.Provider>
  );
};

export default ProveedorDiscentes;
export { contextoDiscentes };
