import React from "react";
import useAuth from "./hooks/useAuth";
import Usuario from "./Usuario";
import "./Usuarios.css";

const Usuarios = () => {
  const { usuarios } = useAuth();
  return (
    <div className="usuarios-container">
      <h2 className="titulo-seccion">Gestión de Usuarios</h2>

      <div className="usuarios-grid">
        {usuarios.map((usuario) => (
          <Usuario key={usuario.id_rol} usuario={usuario} />
        ))}
      </div>
    </div>
  );
};

export default Usuarios;
