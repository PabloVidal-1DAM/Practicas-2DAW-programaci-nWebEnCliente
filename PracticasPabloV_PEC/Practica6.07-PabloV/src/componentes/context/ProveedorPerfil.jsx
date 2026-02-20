import React, { createContext, useEffect, useState } from 'react'
import useAuth from '../hooks/useAuth';
import useSupabase from '../hooks/useSupabase';

/* Contexto que dará los datos del perfil del usuario al componente que lo necesite. */
const contextoPerfiles = createContext();
const ProveedorPerfil = ({children}) => {

  const {usuario, setError} = useAuth();
  const {obtenerRegistro, editarDato} = useSupabase();

  /* Estado exclusivo de este proveedor, que almacenará un objeto JSON con el perfil de 1 usuario (el que está en la sesión). */
  const [perfil, setPerfil] = useState({});

  const datosPerfilIniciales = {
    foto: "",
    nombreCompleto: "",
    descripcion: ""
  }
  const [datosPerfil, setDatosPerfil] = useState(datosPerfilIniciales);

  /* Se trae de la base de datos el perfil que coincide con el id de usuario que guarda el estado del proveedor de sesión. */
  const traerPerfilUsuario = async () =>{
    try{
      if (!usuario){
        return null;
      }
      const perfil = await obtenerRegistro("perfiles","id_usuario", usuario.id);
      if(perfil){
        setPerfil(perfil);
        setDatosPerfil(perfil);
        setError(`Perfil cargado correctamente.`);
      }
    }catch(error){
      setError(`Ha ocurrido un error al intentar obtener el perfil: ${error.message}`);
    }
  }

  /* Función para actualizar el formulario de modificado de perfil. */
  const actualizarDatosPerfil = (evento) =>{
    const {name, value} = evento.target;
    setDatosPerfil({...datosPerfil, [name] : value})
  }

  /* Función que modifica los campos que el usuario haya editado en el formulario. */
  const editarDatosPerfil = async () =>{
    try{
      const respuesta = await editarDato("perfiles", "id_usuario", usuario.id, datosPerfil);
      if(respuesta){
        traerPerfilUsuario();
        setDatosPerfil(datosPerfilIniciales);
        setError(`Perfil actualizado correctamente.`);
      }
    }catch(error){
      setError(`Ha ocurrido un error al intentar actualizar los datos del perfil: ${error.message}`);
    }
  }

  /*Función que obtiene la foto de 1 usuario en concreto en base a su id.*/
  const obtenerFotoUsuario = async (idUsuario) =>{
    try{
    const respuesta = await obtenerRegistro("perfiles", "id_usuario", idUsuario);
    if(respuesta){
      return respuesta.foto;
    }}catch(error){
      setError(`Ha ocurrido un error al intentar obtener las fotos de usuario: ${error.message}.`);
      return null;
    }
  }

  /* Al cargarse o repintar este componente, si existe un usuario logeado en el sistema se trae su perfil. */
  /* Así he podido evitar que salgan ya mensajes de error de no poder traer el perfil ANTES de hacer login o registrarse. */
  useEffect(() =>{
    if(usuario && usuario.id){
      traerPerfilUsuario();
    }
  }, [usuario]);

const datos = {perfil, datosPerfil, actualizarDatosPerfil, editarDatosPerfil, obtenerFotoUsuario};
  return (
    <contextoPerfiles.Provider value={datos}>
        {children}
    </contextoPerfiles.Provider>
  );
}

export default ProveedorPerfil;
export{contextoPerfiles};

