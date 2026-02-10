import React, { useState } from "react";
import { conexionSupabase } from "../Estructura/supabase/supabase";
import useAuth from "./useAuth";

const useSupabase = () => {
  // Hook personalizado que contiene funcion genérica para traer todo lo de cualquier tabla de la base de datos.
  const [cargando, setCargando] = useState(false);
  const { setError, usuario } = useAuth();

  // Función genérica que sirve para hacer una consulta a los campos que se quieran (incluidos multitabla) y/o obtener todos los registros de una tabla.
  // Ambas acciones se realizarán dependiendo de si se rellena accion con los datos a traer o se deja vacío (selecciona todos los campos).
  const obtenerTodo = async (tabla, accion = "*") => {
    setCargando(true);
    try {
      const { data, error } = await conexionSupabase
        .from(tabla)
        .select(
          accion
        );

      if (error) throw error;

      return data;

    } catch (error) {
      setError(
        "Ha ocurrido un error al intentar cargar las listas de la BD: " +
          error.message,
      );
    }finally{
      setCargando(false);
    }
  };

  const obtenerRegistro = async (tabla, id) => {
    setCargando(true);
    try {
      const { data, error } = await conexionSupabase
        .from(tabla)
        .select("*")
        .eq("id", id)
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
        .insert([objeto]);

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
