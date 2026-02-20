import React from 'react'
import useContextPerfil from "../componentes/hooks/useContextPerfil";
import "./Perfil.css";

const Perfil = () => {
    const {perfil, datosPerfil, actualizarDatosPerfil, editarDatosPerfil} = useContextPerfil();
    const imagen = perfil.foto || "https://i.pinimg.com/736x/76/4d/59/764d59d32f61f0f91dec8c442ab052c5.jpg";
  return (
    <div className="perfil-wrapper">
      
      {/* Zona de información general del perfil: */}
      <div className="perfil-card">
        <div className="perfil-header-bg"></div>
        
        <div className="perfil-avatar-container">
          <img 
            src={imagen} 
            alt="Imágen de usuario" 
            className="perfil-avatar-img"
          />
        </div>

        <div className="perfil-info">
          <h2>{perfil.nombreCompleto || "Nombre de Usuario"}</h2>
          
          {/* Si el usuario no pone descripción, se muestra un texto que informa de ello. */}
          <p className="perfil-desc">
            {perfil.descripcion || <span style={{fontStyle:'italic', color:'#94a3b8'}}>Sin descripción...</span>}
          </p>
        </div>
      </div>

      {/*Zona del formulario para editar datos del perfil:*/}
      <div className="perfil-form-container">
        <h3>Editar Perfil</h3>
        
        <div className="form-group">
          <label>Nombre Completo</label>
          <input 
            type="text" 
            name="nombreCompleto"
            value={datosPerfil.nombreCompleto}
            onChange={actualizarDatosPerfil}
            placeholder="Inserta tu nombre."
          />
        </div>

        <div className="form-group">
          <label>URL de tu Foto (Avatar)</label>
          <input 
            type="text" 
            name="foto"
            value={datosPerfil.foto}
            onChange={actualizarDatosPerfil}
            placeholder="https://tufotodeusuario.com"
          />
          <small>Copia y pega aquí el enlace de una imagen de Google/Pinterest.</small>
        </div>

        <div className="form-group">
          <label>Descripción</label>
          <textarea 
            name="descripcion"
            value={datosPerfil.descripcion}
            onChange={actualizarDatosPerfil}
            placeholder="Cuéntanos algo sobre ti..."
            rows="4"
          />
        </div>

        <button className="btn-guardar-perfil" onClick={() =>{editarDatosPerfil()}}>
          Guardar
        </button>
      </div>

    </div>
  );
}

export default Perfil
