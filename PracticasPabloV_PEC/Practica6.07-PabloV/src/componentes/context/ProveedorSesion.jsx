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

  const { obtenerTodo, editarDato, obtenerRegistro } = useSupabase();

  // será gastado por todos aquellos componentes que tengan que usar al componente "Confirmacion.jsx"
  const [AccionConfirmacion, setAccionConfirmacion] = useState(false);
  const [mensajeAccion, setMensajeAccion] = useState("");
  const [funcionConfirmacion, setFuncionConfirmacion] = useState(null);

  // Estado usado exclusivamente para traer a los roles de todos los usuarios.
  const [usuarios, setUsuarios] = useState([]);
  // Este, por otra parte, hace lo mismo pero con el rol del usuario de la sesión.
  const [rol, setRol] = useState(null);

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
    setRol(null);
  };

  const traerRolesUsuarios = async () => {
    try {
      const usuarios = await obtenerTodo("roles", "id_rol, correo, rol");
      if (usuarios) {
        setUsuarios(usuarios);
      }
    } catch (error) {
      setError(
        `Ha ocurrido un error al traer a los usuarios de la BD: ${error.message}`,
      );
    }
  };

  const traerRolUsuario = async (idUsuario) => {
    try {
      const rol = await obtenerRegistro("roles", "id_rol", idUsuario);
      if (rol) {
        setRol(rol.rol);
      }
    } catch (error) {
      setError(
        `Error al intentar traer el rol de un usuario: ${error.message}`,
      );
    }
  };

  const cambiarRolUsuario = async (idUsuario, rol) => {
    try {
      const objeto = {
        rol,
      };
      const resultado = await editarDato("roles", "id_rol", idUsuario, objeto);
      await traerRolesUsuarios();
      if (resultado) {
        setError(`El rol se ha cambiado correctamente.`);
      }
    } catch (error) {
      setError(
        `Ha ocurrido un error al cambiar el rol al usuario: ${error.message}`,
      );
    }
  };

  /*Con esta función es posible ocultar y/o mostrar las partes de la aplicación que pueda ver el administrador. */
  const esAdmin = () =>{
    if (rol === 'administrador') return true;
  }

  useEffect(() => {
    // Función que se hará siempre que se carge el componente y estará atenta a cualquier cambio en la base de datos de usuarios.
    const subscripcion = conexionSupabase.auth.onAuthStateChange(
      (event, session) => {
        if (session) {
          /*Cada vez que exista una sesión ocurre lo siguiente:
          1. Obtiene la info de ese usuario y se deja constancia de que se ha iniciado sesión.
          2. Se traen los roles de todos los usuarios de la base de datos y se guardan en un estado.
          3. Se trae el rol de la sesion del usuario (para la función de esAdmin).*/
          setSesionIniciada(true);
          obtenerInfoUsuario();
          traerRolesUsuarios();
          traerRolUsuario(session.user.id);
        } else {
          navegar("/iniciar-sesion");
          setSesionIniciada(false);
        }
      },
      [],
    );
  }, []);

  const datos = {
    datosSesion,
    registrarUsuario,
    logearUsuario,
    cerrarSesionUsuario,
    sesionIniciada,
    usuario,
    esAdmin,
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
    cambiarRolUsuario,
  };

  return (
    <contextoSesion.Provider value={datos}>{children}</contextoSesion.Provider>
  );
};

export default ProveedorSesion;
export { contextoSesion };
