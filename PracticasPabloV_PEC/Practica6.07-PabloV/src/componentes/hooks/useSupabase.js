import React, { useState } from "react";
import { conexionSupabase } from "../Estructura/supabase/supabase";
import useAuth from "./useAuth";

const useSupabase = () => {
  // Hook personalizado que contiene funcion genérica para traer todo lo de cualquier tabla de la base de datos.
  const [cargando, setCargando] = useState(false);
  const { setError } = useAuth();

  const obtenerTodo = async (tabla) => {
    setCargando(true);
    try {
      const { data, error } = await conexionSupabase.from(tabla).select("*");

      if (error) {
        throw error;
      }

      return data;
    } catch (error) {
      setError(
        `Error al intentar obtener todos los datos de la BD: ${error.message}`,
      );
      return [];
    } finally {
      setCargando(false);
    }
  };

  const obtenerRegistro = async (tabla, id) => {
    setCargando(true);
    try {
      const { data, error } = await conexionSupabase
        .from(tabla)
        .select("*")
        .eq(id)
        .single(); // Single hace que devuelva un objeto, y no un array de estos.

      if (error) {
        throw error;
      }

      return data;
    } catch (error) {
      setError(
        `Error al intentar obtener un solo registro de la BD: ${error.message}`,
      );
      return null;
    } finally {
      setCargando(false);
    }
  };

  // He añadido funciones genéricas para las demás acciones: Añadir, borrar y Modificar datos.
  // Simplemente informan de si han podido hacer la acción con un true o false.
  const insertarDato = async (tabla, objeto) => {
    setCargando(true);
    try {
      const { data, error } = await conexionSupabase
        .from(tabla)
        .insert([objeto])
        .select();

      if (error) {
        throw error;
      }

      return true;
    } catch (error) {
      setError(`Error al intentar insertar datos a la BD: ${error.message}`);
      return false;
    } finally {
      setCargando(false);
    }
  };

  const eliminarDato = async (tabla, id) => {
    setCargando(true);
    try {
      const { data, error } = await conexionSupabase
        .from(tabla)
        .delete()
        .eq("id", id);

      if (error) {
        throw error;
      }

      return true;
    } catch (error) {
      setError(`Error al intentar eliminar datos de la BD: ${error.message}`);
      return false;
    } finally {
      setCargando(false);
    }
  };

  const editarDato = async (tabla, id, objeto) => {
    setCargando(true);
    try {
      const { data, error } = await conexionSupabase
        .from(tabla)
        .update(objeto)
        .eq("id", id);

      if (error) {
        throw error;
      }

      return true;
    } catch (error) {
      setError(`Error al intentar modificar datos dela BD: ${error.message}`);
      return false;
    } finally {
      setCargando(false);
    }
  };

  return { obtenerTodo, obtenerRegistro, insertarDato, eliminarDato, editarDato, cargando };
};

export default useSupabase;
