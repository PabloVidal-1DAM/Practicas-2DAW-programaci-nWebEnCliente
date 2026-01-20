import React from "react";
import { Link } from "react-router-dom";

const SupabaseAcciones = () => {
  return (
    <div>
      <nav>
        <Link to={"/iniciar-sesion"} className="botonSesion">
          Iniciar Sesión
        </Link>

        <Link to={"/cerrar-sesion"} className="botonSesion">
          Cerrar Sesión
        </Link>
      </nav>
    </div>
  );
};

export default SupabaseAcciones;
