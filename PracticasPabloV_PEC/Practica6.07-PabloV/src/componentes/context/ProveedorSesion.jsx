import React, { createContext, useEffect, useState } from "react";
import useSesion from "../hooks/useSesion.js";
import { conexionSupabase } from "../Estructura/supabase/supabase.js";

const contextoSesion = createContext();

const ProveedorSesion = ({ children }) => {

  const {
    usuario,
    datosSesion,
    error,
    setError,
    sesionIniciada,
    setSesionIniciada,
    registrarse,
    iniciarSesion,
    cerrarSesion,
    obtenerInfoUsuario,
    navegar,
    actualizarDato,
    idioma,
    setIdioma
  } = useSesion();

  const registrarUsuario = async () =>{
    await registrarse();
  }

  const logearUsuario = async() =>{
    await iniciarSesion();
  }

  const cerrarSesionUsuario = async() =>{
    await cerrarSesion();
    setSesionIniciada(false);
  }



  useEffect(() => {
    // Función que se hará siempre que se carge el componente y estará atenta a cualquier cambio en la base de datos de usuarios.
    const subscripcion = conexionSupabase.auth.onAuthStateChange(
      (event, session) => {
        if (session) {
          setSesionIniciada(true);

          obtenerInfoUsuario();
        } else {
          navegar("/iniciar-sesion");
          setSesionIniciada(false);
        }
      },
    );
  }, []);

  const datos = {
    datosSesion,
    registrarUsuario,
    logearUsuario,
    cerrarSesionUsuario,
    sesionIniciada,
    usuario,
    error,
    setError,
    actualizarDato,
    idioma,
    setIdioma,
    navegar
  };

  return (
    <contextoSesion.Provider value={datos}>{children}</contextoSesion.Provider>
  );
};

export default ProveedorSesion;
export { contextoSesion };
