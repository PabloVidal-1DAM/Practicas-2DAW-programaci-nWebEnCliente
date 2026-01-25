import React from "react";
import { Link } from "react-router-dom";
import useSesion from "../../hooks/useSesion";

const SupabaseAcciones = () => {
  const { sesionIniciada } = useSesion();
  return (
    <nav>
      {/*Si el usuario no esta logeado, podrá ver las demás acciones menos cerrar sesión y al revés cuando ya ha iniciado sesión. */}
      {sesionIniciada === false && (
        <>
          <Link to={"/iniciar-sesion"} className="botonSesion">
            Iniciar Sesión
          </Link>
          <Link to={"/registrarse"} className="botonSesion">
            Registrar
          </Link>
        </>
      )}
      {sesionIniciada && (
        <Link to={"/cerrar-sesion"} className="botonCerrarSesion">
          Cerrar Sesión
        </Link>
      )}
    </nav>
  );
};

export default SupabaseAcciones;
