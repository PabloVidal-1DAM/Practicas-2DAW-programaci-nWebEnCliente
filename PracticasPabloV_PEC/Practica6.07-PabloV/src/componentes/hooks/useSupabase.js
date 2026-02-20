import React, { useState } from "react";
import { conexionSupabase } from "../Estructura/supabase/supabase";

const useSupabase = () => {
  // Hook personalizado que contiene funcion genérica para traer todo lo de cualquier tabla de la base de datos.
  const [cargando, setCargando] = useState(false);

  // Función genérica que sirve para hacer una consulta a los campos que se quieran (incluidos multitabla) y/o obtener todos los registros de una tabla.
  // Ambas acciones se realizarán dependiendo de si se rellena accion con los datos a traer o se deja vacío (selecciona todos los campos).
  const obtenerTodo = async (tabla, accion = "*") => {
    setCargando(true);
    let datos = null;
    try {
      const { data, error } = await conexionSupabase.from(tabla).select(accion);

      if (error) throw error;

      return (datos = data);
    } catch (error) {
      throw error;
    } finally {
      setCargando(false);
    }
  };

  const obtenerRegistro = async (tabla, columna, id) => {
    setCargando(true);
    let datos = null;
    try {
      const { data, error } = await conexionSupabase
        .from(tabla)
        .select("*")
        .eq(columna, id)
        .maybeSingle(); // Single hace que devuelva un objeto, y no un array de estos.

      if (error) {
        throw error;
      }

      return (datos = data);
    } catch (error) {
      throw error;
    } finally {
      setCargando(false);
    }
  };

  // He añadido funciones genéricas para las demás acciones: Añadir, borrar y Modificar datos.
  // Simplemente informan de si han podido hacer la acción con un true o false.
  const insertarDato = async (tabla, objeto) => {
    setCargando(true);
    let resultado = null;
    try {
      const { data, error } = await conexionSupabase
        .from(tabla)
        .insert([objeto])
        .select();

      // Posibles errores de sintaxis.
      if (error) {
        throw error;
      }

      // Errores de permisos de RLS, ya que si no la acción se hace aunque no se inserte nada y al usuario se le da falso feedback.
      if (!data || data.length === 0) {
        throw new Error("No tienes permisos de RLS para insertar estos datos.");
      }

      resultado = data;
      return resultado;
    } catch (error) {
      throw error;
    } finally {
      setCargando(false);
    }
  };

  const eliminarDato = async (tabla, id) => {
    setCargando(true);
    let resultado = null;
    try {
      const { data, error } = await conexionSupabase
        .from(tabla)
        .delete()
        .eq("id", id)
        .select();

      // Posibles errores de sintaxis.
      if (error) {
        throw error;
      }

      // Errores de permisos de RLS, ya que si no la acción se hace aunque no borre nada y al usuario se le da falso feedback.
      if (!data || data.length === 0) {
        throw new Error("No tienes permisos de RLS para eliminar estos datos.");
      }

      resultado = data;
      return resultado;
    } catch (error) {
      throw error;
    } finally {
      setCargando(false);
    }
  };

  const editarDato = async (tabla, columna, id, objeto) => {
    setCargando(true);
    let resultado = false;
    try {
      const { data, error } = await conexionSupabase
        .from(tabla)
        .update(objeto)
        .eq(columna, id)
        .select();

      // Posibles errores de sintaxis.
      if (error) {
        throw error;
      }

      // Errores de permisos de RLS, ya que si no la acción se hace aunque no borre nada y al usuario se le da falso feedback.
      if (!data || data.length === 0) {
        throw new Error("No tienes permisos de RLS para editar estos datos.");
      }

      resultado = data;
      return resultado;
    } catch (error) {
      throw error;
    } finally {
      setCargando(false);
    }
  };

  return {
    obtenerTodo,
    obtenerRegistro,
    insertarDato,
    eliminarDato,
    editarDato,
    cargando,
  };
};

export default useSupabase;
