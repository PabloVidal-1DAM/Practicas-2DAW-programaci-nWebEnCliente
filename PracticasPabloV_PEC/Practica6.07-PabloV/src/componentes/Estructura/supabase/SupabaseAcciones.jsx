import React from "react";
import { Link } from "react-router-dom";
import useSesion from "../../hooks/useSesion";

const SupabaseAcciones = () => {
  const { sesionIniciada } = useSesion();
  return (
    <nav>
      <Link to={"/iniciar-sesion"} className="botonSesion">
        Iniciar Sesión
      </Link>

      <Link to={"/registrarse"} className="botonSesion">
        Registrar
      </Link>
      {sesionIniciada && (
        <Link to={"/cerrar-sesion"} className="botonCerrarSesion">
          Cerrar Sesión
        </Link>
      )}
    </nav>
  );
};

export default SupabaseAcciones;
