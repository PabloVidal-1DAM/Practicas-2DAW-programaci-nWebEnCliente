import React, { useState } from "react";

const useDatos = () => {
  const direccionLocal = "http://localhost:3000/";

  const [cargando, setCargando] = useState(false);
  const [error, setError] = useState(null);

  const construirHeader = () => {
    return {
      "Content-Type": "application/json",
    };
  };

  const traerDatos = async (endpoint, id) => {
    const ruta = id
      ? `${direccionLocal}${endpoint}/${id}`
      : `${direccionLocal}${endpoint}`;
    try {
      setCargando(true);
      const respuesta = await fetch(ruta, {
        method: "GET",
        headers: construirHeader(),
      });

      if (!respuesta.ok) {
        throw new Error(
          `Ha ocurrido un error al traer datos: ${respuesta.status}`,
        );
      }

      const datos = await respuesta.json();
      return datos;
    } catch (error) {
      setError(error.message);
      throw error;
    } finally {
      setCargando(false);
    }
  };

  const enviarDatos = async (endpoint, datos) => {
    try {
      setCargando(true);
      const URL = `${direccionLocal}${endpoint}`;

      const respuesta = await fetch(URL, {
        method: "POST",
        headers: construirHeader(),
        body: JSON.stringify(datos),
      });

      if (!respuesta.ok) {
        throw new Error(
          `Ha ocurrido un error al enviar datos: ${respuesta.status}`,
        );
      }

      const datos = await respuesta.json();
      return datos;
    } catch (error) {
      setError(error.message);
      throw error;
    } finally {
      setCargando(false);
    }
  };

  const modificarDatos = async (endpoint, datos) => {
    try {
      setCargando(true);
      const URL = `${endpoint}${datos}`;

      const respuesta = await fetch(URL, {
        method: "PUT",
        headers: construirHeader(),
        body: JSON.stringify(datos),
      });

      if (!respuesta.ok) {
        throw new Error(
          `Ha ocurrido un error al modificar datos: ${respuesta.status}`,
        );
      }

      const datos = await respuesta.json();
      return datos;
    } catch (error) {
      setError(error.message);
      throw error;
    } finally {
      setCargando(false);
    }
  };

  const borrarDatos = async (endpoint) => {
    try {
      setCargando(true);
      const URL = `${direccionLocal}${endpoint}`;

      const respuesta = await fetch(URL, {
        method: "DELETE",
        headers: construirHeader(),
      });

      if (!respuesta.ok) {
        throw new Error(
          `Ha ocurrido un nuevo error al borrar datos: ${respuesta.status}`,
        );
      }

      const datos = await respuesta.json();
      return datos;
    } catch (error) {
      setError(error.message);
      throw error;
    } finally {
      setCargando(false);
    }
  };

  return {
    cargando,
    error,
    
    traerDatos,
    enviarDatos,
    modificarDatos,
    borrarDatos,
  };
};

export default useDatos;
