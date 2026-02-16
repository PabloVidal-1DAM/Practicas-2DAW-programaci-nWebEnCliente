import React, { createContext, useEffect, useState } from "react";
import useSesion from "../hooks/useSesion.js";
import { conexionSupabase } from "../Estructura/supabase/supabase.js";
import useSupabase from "../hooks/useSupabase.js";

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
    setIdioma,
  } = useSesion();

  const { obtenerTodo, editarDato } = useSupabase();

  // será gastado por todos aquellos componentes que tengan que usar al componente "Confirmacion.jsx"
  const [AccionConfirmacion, setAccionConfirmacion] = useState(false);
  const [mensajeAccion, setMensajeAccion] = useState("");
  const [funcionConfirmacion, setFuncionConfirmacion] = useState(null);

  const [usuarios, setUsuarios] = useState([]);
  const [usuarioSeleccionado, setUsuarioSeleccionado] = useState(null);

  const mensajeConfirmacion = (mensaje, callback) => {
    setMensajeAccion(mensaje);
    setFuncionConfirmacion(() => callback);
    setAccionConfirmacion(true);
  };

  const cerrarMensaje = () => {
    setAccionConfirmacion(false);
    setMensajeAccion("");
    setFuncionConfirmacion(null);
  };

  const confirmarMensaje = () => {
    if (funcionConfirmacion) {
      funcionConfirmacion();
    }
    cerrarMensaje();
  };

  const registrarUsuario = async () => {
    await registrarse();
  };

  const logearUsuario = async () => {
    await iniciarSesion();
  };

  const cerrarSesionUsuario = async () => {
    await cerrarSesion();
    setSesionIniciada(false);
  };

  const traerRolesUsuarios = async () => {
    try {
      const usuarios = await obtenerTodo("roles", "id, correo, rol");
      if (usuarios) {
        setUsuarios(usuarios);
      }
    } catch (error) {
      setError(
        `Ha ocurrido un error al traer a los usuarios de la BD: ${error.message}`,
      );
    }
  };

  const cambiarRolUsuario = async (idUsuario, rol) => {
    try {
      const objeto = {
        rol
      }
      const resultado = await editarDato("roles", idUsuario, objeto);
      await traerRolesUsuarios();
      if (resultado) {
        setError(`El rol se ha cambiado correctamente.`);
      }
    } catch (error) {
      setError(`Ha ocurrido un error al cambiar el rol al usuario: ${error.message}`);
    }
  };

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
      }, []
    );

    traerRolesUsuarios();
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
    navegar,

    AccionConfirmacion,
    mensajeAccion,
    mensajeConfirmacion,
    cerrarMensaje,
    confirmarMensaje,

    usuarios,
    usuarioSeleccionado,
    cambiarRolUsuario
  };

  return (
    <contextoSesion.Provider value={datos}>{children}</contextoSesion.Provider>
  );
};

export default ProveedorSesion;
export { contextoSesion };
