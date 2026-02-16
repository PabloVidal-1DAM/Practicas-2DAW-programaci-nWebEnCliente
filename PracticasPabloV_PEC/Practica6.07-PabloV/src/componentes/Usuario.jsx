import React, { useState } from "react";
import useAuth from "./hooks/useAuth";

const Usuario = ({ usuario }) => {
  const { cambiarRolUsuario, mensajeConfirmacion} = useAuth();

  const [rolSeleccionado, setRolSeleccionado] = useState(usuario.rol);
  const rolCambiado = rolSeleccionado !== usuario.rol // Cuando el rol que viene de la base de datos cambie, se mostrará el boton para guardar cambios.
  return (
    <div className="usuario-card">
      {/* 1. Avatar decorativo */}
      <div className="usuario-avatar">
        <img src="https://i.pinimg.com/736x/76/4d/59/764d59d32f61f0f91dec8c442ab052c5.jpg"></img>
      </div>

      {/* 2. Correo */}
      <div className="usuario-correo">{usuario.correo}</div>

      {/* 3. Rol con estilo de etiqueta */}
      <div className="zona-edicion-rol">
        <label className="label-rol">Rol Actual:</label>
        <div className="input-group">
          <select
            className="select-rol"
            value={rolSeleccionado}
            onChange={(e) => {
              setRolSeleccionado(e.target.value);
            }}
          >
            <option value="usuario">Usuario</option>
            <option value="administrador">Administrador</option>
          </select>
          {rolCambiado && 
          <button className="btn-guardar-rol" onClick={ () => mensajeConfirmacion(`¿Seguro que quieres guardar los cambios de rol de ${usuario.correo} a ${rolSeleccionado}?`, 
            () =>{ cambiarRolUsuario(usuario.id, rolSeleccionado)}
          )}>
            Guardar Cambios
        </button>}
        </div>
      </div>
    </div>
  );
};

export default Usuario;
