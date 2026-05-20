import React, { useState } from "react";

const useAPI = () => {
  const [cargando, setCargando] = useState(false);
  const [errorGlobal, setErrorGlobal] = useState(null);

  const crearHeader = () => {
    return {
      "Content-Type": "application/json",
    };
  };

  const obtenerDatos = async (URL, id = "") => {
    try {
      setCargando(true);
      const endpoint = id ? `${URL}/${id}` : `${URL}`;

      const respuesta = await fetch(endpoint, {
        method: "GET",
        headers: crearHeader(),
      });

      if (!respuesta.ok) {
        throw new Error(
          "Error al obtener datos al endpoint: " + respuesta.status,
        );
      }

      const datos = await respuesta.json();
      return datos;
    } catch (error) {
      setErrorGlobal(error.message);
      throw error;
    } finally {
      setCargando(false);
    }
  };

  const enviarDatos = async (endpoint, cuerpo) => {
    try {
      setCargando(true);

      const respuesta = await fetch(endpoint, {
        method: "POST",
        headers: crearHeader(),
        body: JSON.stringify(cuerpo),
      });

      if (!respuesta.ok) {
        throw new Error(
          "Error al enviar datos al endpoint: " + respuesta.status,
        );
      }

      const datos = await respuesta.json();
      return datos;
    } catch (error) {
      setErrorGlobal(error.message);
      throw error;
    } finally {
      setCargando(false);
    }
  };

  const modificarDatos = async (endpoint, cuerpo) => {
    try {
      setCargando(true);

      const respuesta = await fetch(endpoint, {
        method: "PUT",
        headers: crearHeader(),
        body: JSON.stringify(cuerpo),
      });

      if (!respuesta.ok) {
        throw new Error(
          "Error al modificar datos del endpoint: " + respuesta.status,
        );
      }

      const datos = await respuesta.json();
      return datos;
    } catch (error) {
      setErrorGlobal(error.message);
      throw error;
    } finally {
      setCargando(false);
    }
  };

  const borrarDatos = async (endpoint) => {
    try {
      setCargando(true);

      const respuesta = await fetch(endpoint, {
        method: "DELETE",
        headers: crearHeader(),
      });

      if (!respuesta.ok) {
        throw new Error(
          "Error al modificar datos del endpoint: " + respuesta.status,
        );
      }

      const datos = await respuesta.json();
      return datos;
    } catch (error) {
      setErrorGlobal(error.message);
      throw error;
    } finally {
      setCargando(false);
    }
  };

  return {
    obtenerDatos,
    enviarDatos,
    modificarDatos,
    borrarDatos,
    cargando,
    errorGlobal,
  };
};

export default useAPI;
