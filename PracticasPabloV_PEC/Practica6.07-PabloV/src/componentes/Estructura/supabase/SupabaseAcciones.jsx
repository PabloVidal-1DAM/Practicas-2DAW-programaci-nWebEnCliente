import React from "react";
import { Link } from "react-router-dom";

const SupabaseAcciones = () => {
  return (
    <nav>
      <Link to={"/iniciar-sesion"} className="botonSesion">
        Iniciar Sesión
      </Link>

      <Link to={"/registrarse"} className="botonSesion">
        Registrar
      </Link>

      <Link to={"/cerrar-sesion"} className="botonCerrarSesion">
        Cerrar Sesión
      </Link>
    </nav>
  );
};

export default SupabaseAcciones;
