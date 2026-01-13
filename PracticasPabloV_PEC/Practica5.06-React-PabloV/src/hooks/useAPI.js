import React, { useState } from "react";

const useAPI = () => {
  const [cargando, setCargando] = useState(false);
  const [error, setError] = useState(null);

  const llamada = async (url, metodo = {}) => {
    setCargando(true);
    setError(null);
    try {
      const respuesta = await fetch(url, {
        headers: {
          "Content-Type": "application/json",
        },
        ...metodo,
      });

      if (!respuesta.ok) {
        throw new Error(
          `Error en la llamada ${respuesta.status}: ${respuesta.statusText}`
        );
      }
      const datos = await respuesta.json();

      await new Promise((resolve) => setTimeout(resolve, 5000)); // Promesa que se resuelve en 5 seg aposta para probar el componente "cargando.jsx".

      return datos;
    } catch (error) {
      setError(error.message);
    } finally {
      setCargando(false);
    }
  };

  const obtenerDatos = (url) => {
    return llamada(url);
  };

  const guardarDatos = (url, body) => {
    return llamada(url, { method: "POST", body: JSON.stringify(body), });
  };

  const editarPUT = (url, body) => {
    llamada(url, { method: "PUT", body: JSON.stringify(body), });
  };

  const editarPATCH = (url, body) => {
    llamada(url, { method: "PATCH", body: JSON.stringify(body), });
  };

  const borrar = (url) =>{
    llamada(url, {method: "DELETE", });
  }
  
  return {
    obtenerDatos,
    guardarDatos,
    editarPUT,
    editarPATCH,
    borrar,
    cargando
  };
};

export default useAPI;
