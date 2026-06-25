import React, { useState } from "react";

const useDatos2 = () => {
  const [cargando, setCargando] = useState(false);
  const [errores, setErrores] = useState(null);
  const direccionLocal = "http://localhost:3000";

  const construirHeader = () => {
    return {
      "Content-Type": "application/json",
    };
  };

  const traerDatos = async (endpoint, id) => {
    try {
      setCargando(true);
      const URL = id
        ? `${direccionLocal}/${endpoint}/${id}`
        : `${direccionLocal}/${endpoint}`;

      const respuesta = await fetch(URL, {
        method: "GET",
        headers: construirHeader(),
      });

      if (!respuesta.ok) {
        throw new Error(`Error al traer datos: , ${respuesta.status}`);
      }

      const datos = await respuesta.json();
      return datos;
    } catch (error) {
      setErrores(error.message);
      throw error;
    } finally {
      setCargando(false);
    }
  };

  const enviarDatos = async (endpoint, cuerpo) => {
    try {
      setCargando(true);
      const URL = `${direccionLocal}/${endpoint}`;

      const respuesta = await fetch(URL, {
        method: "POST",
        headers: construirHeader(),
        body: JSON.stringify(cuerpo),
      });

      if (!respuesta.ok) {
        throw new Error(`Error al enviar datos: , ${respuesta.status}`);
      }

      const datos = await respuesta.json();
      return datos;
    } catch (error) {
      setErrores(error.message);
      throw error;
    } finally {
      setCargando(false);
    }
  };

  const modificarDatos = async (endpoint, cuerpo) => {
    try {
      setCargando(true);
      const URL = `${direccionLocal}/${endpoint}`;

      const respuesta = await fetch(URL, {
        method: "PUT",
        headers: construirHeader(),
        body: JSON.stringify(cuerpo),
      });

      if (!respuesta.ok) {
        throw new Error(`Error al modificar datos: , ${respuesta.status}`);
      }

      const datos = await respuesta.json();
      return datos;
    } catch (error) {
      setErrores(error.message);
      throw error;
    } finally {
      setCargando(false);
    }
  };

  const borrarDatos = async (endpoint) => {
    try {
      setCargando(true);
      const URL = `${direccionLocal}/${endpoint}`;

      const respuesta = await fetch(URL, {
        method: "DELETE",
        headers: construirHeader(),
      });

      if (!respuesta.ok) {
        throw new Error(`Error al borrar datos: , ${respuesta.status}`);
      }

      const datos = await respuesta.json();
      return datos;
    } catch (error) {
      setErrores(error.message);
      throw error;
    } finally {
      setCargando(false);
    }
  };

  return {traerDatos, enviarDatos, modificarDatos, borrarDatos, cargando, errores};
};

export default useDatos2;
