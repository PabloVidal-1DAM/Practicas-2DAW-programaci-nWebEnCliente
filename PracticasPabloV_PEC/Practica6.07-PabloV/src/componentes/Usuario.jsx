import React, { useState, useEffect } from "react";
import useAuth from "./hooks/useAuth";
import useContextPerfil from "./hooks/useContextPerfil";

const Usuario = ({ usuario }) => {
  const { cambiarRolUsuario, mensajeConfirmacion } = useAuth();

  /*Estos estados son exclusivos de este componente para evitar que todos los usuarios compartan el mismo estado. 
  Con esto me he quitado problemas como seleccionar el select y cambiarlo para un usuario, pero que se cambiase en todos.*/
  const [rolSeleccionado, setRolSeleccionado] = useState(usuario.rol);
  const rolCambiado = rolSeleccionado !== usuario.rol; // Cuando el rol que viene de la base de datos cambie, se mostrará el boton para guardar cambios.

  const { obtenerFotoUsuario } = useContextPerfil();
  const [imagen, setImagen] = useState("https://i.pinimg.com/736x/76/4d/59/764d59d32f61f0f91dec8c442ab052c5.jpg");

  const obtenerImagen = async () => {
    const imagen = await obtenerFotoUsuario(usuario.id_rol);
    if (imagen) {
      setImagen(imagen);
    }
  };

  useEffect(() => {
    /*Por cada usuario cargado, se obtiene su imágen de su perfil para mostrarla en el html de abajo. */
    obtenerImagen();
  }, [usuario.id]);

  return (
    <div className="usuario-card">
      {/* Se usa el estado que guarda la imágen del usuario que se obtiene de la función. */}
      <div className="usuario-avatar">
        <img src={imagen}></img>
      </div>

      <div className="usuario-correo">{usuario.correo}</div>

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
          {rolCambiado && (
            <button
              className="btn-guardar-rol"
              onClick={() =>
                mensajeConfirmacion(
                  `¿Seguro que quieres guardar los cambios de rol de ${usuario.correo} a ${rolSeleccionado}?`,
                  () => {
                    cambiarRolUsuario(usuario.id_rol, rolSeleccionado);
                  },
                )
              }
            >
              Guardar Cambios
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Usuario;
