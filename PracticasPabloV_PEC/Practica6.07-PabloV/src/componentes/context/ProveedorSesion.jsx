import React, { createContext, useEffect, useState } from "react";
import { conexionSupabase } from "../Estructura/supabase/supabase.js";
import { useNavigate } from "react-router-dom";

const contextoSesion = createContext();

const ProveedorSesion = ({ children }) => {
  // Datos por defecto que gastarán los estados necesarios para crear una sesión.
  const datosDeSesion = { email: "", password: "", name: "" };
  const usuarioInicial = {};
  const erroresIniciales = "";
  const sesionInicial = false;

  // Se inicia aquí el navigate para así proveerlo a cualquier componente que necesite moverse a otra ruta.
  const navegar = useNavigate();

  // Estados que identifican a una sesión, como los datos de usuario, usuario logeado, errores durante esa sesión...
  const [datosSesion, setDatosSesion] = useState(datosDeSesion);
  const [usuario, setUsuario] = useState(usuarioInicial);
  const [error, setError] = useState(erroresIniciales);
  const [sesionIniciada, setSesionIniciada] = useState(sesionInicial);

  const registrarse = async () => {
    try {
      const { data, error } = await conexionSupabase.auth.signUp({
        email: datosSesion.email,
        password: datosSesion.password,
        options: {
          // Cuando al usuario le llegue el correo de verificación y se valide, lo mandará a la ruta de Inicio instantaneamente.
          emailRedirectTo: "http://localhost:5173/",
          data: {
            // El nombre de usuario debe ir colocado en el campo de metadata que ofrece supabase.
            display_name: datosSesion.name,
          },
        },
      });

      if (error) {
        throw error;
      } else {
        setError(
          "Preste atención a su bandeja de entrada de correo, recibirá un mensaje de confirmación.",
        ); // En realidad no es un error.
      }
    } catch (error) {
      setError(
        "Ha ocurrido un error al intentar registrarse: " + error.message,
      );
    }
  };

  const iniciarSesion = async () => {
    setError(erroresIniciales);
    try {
      const { data, error } = await conexionSupabase.auth.signInWithPassword({
        email: datosSesion.email,
        password: datosSesion.password,
      });

      if (error) {
        throw error;
      }

      navegar("/");
    } catch (error) {
      setError("Error al intentar hacer login: " + error.message);
    }
  };

  const cerrarSesion = async () => {
    try {
      await conexionSupabase.auth.signOut();
      setError(erroresIniciales);

      navegar("/");
    } catch (error) {
      setError(
        "Ha ocurrido un error al intentar cerrar sesion: " + error.message,
      );
    }
  };

  // Útil sobretodo para saber quien esta logeado y poder acceder a sus datos para por ejemplo mostrar su nickname en alguna parte.
  const obtenerInfoUsuario = async () => {
    try {
      const { data, error } = await conexionSupabase.auth.getUser();

      if (error) {
        throw error;
      }

      setUsuario(data.user);
      setError(erroresIniciales);
    } catch (error) {
      setError(
        "Ha ocurrido un error al intentar obtener la info del usuario: " +
          error.message,
      );
    }
  };

  // Función para actualizar datos en formularios controlados por estado, está aquí para que así cualquier componente que gaste formulario pueda acceder más fácil y no repetir codigo.
  const actualizarDato = (evento) => {
    const { name, value } = evento.target;
    setDatosSesion({ ...datosSesion, [name]: value });
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
      },
    );
  }, []);

  const datos = {
    registrarse,
    iniciarSesion,
    cerrarSesion,
    sesionIniciada,
    usuario,
    error,
    setError,
    actualizarDato,
  };

  return (
    <contextoSesion.Provider value={datos}>{children}</contextoSesion.Provider>
  );
};

export default ProveedorSesion;
export { contextoSesion };
