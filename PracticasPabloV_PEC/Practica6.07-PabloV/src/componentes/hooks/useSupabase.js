import React, { useState } from "react";
import { conexionSupabase } from "../Estructura/supabase/supabase";
import useAuth from "./useAuth";

const useSupabase = () => {
  const [cargando, setCargando] = useState(false);
  const { setError } = useAuth();

  const obtenerTodo = async (tabla) => {
    setCargando(true);
    try {
      const { data, error } = await conexionSupabase.from(tabla).select("*");

      if (error) {
        throw error;
      }

      setCargando(false);
      return data;
      
    } catch (error) {
      setError(
        `Error al intentar obtener todos los datos de la BD: ${error.message}`,
      );
      return [];
    }
  };
  return { obtenerTodo, cargando };
};

export default useSupabase;
