import React, { createContext, useEffect, useState } from 'react'
import useAuth from '../hooks/useAuth';
import useSupabase from '../hooks/useSupabase';

const contextoPerfiles = createContext();
const ProveedorPerfil = ({children}) => {

  const {usuario, setError} = useAuth();
  const {obtenerRegistro, editarDato} = useSupabase();
  const [perfil, setPerfil] = useState({});

  const datosPerfilIniciales = {
    foto: "",
    nombreCompleto: "",
    descripcion: ""
  }
  const [datosPerfil, setDatosPerfil] = useState(datosPerfilIniciales);

  const traerPerfilUsuario = async () =>{
    try{
      if (!usuario){
        return null;
      }
      const perfil = await obtenerRegistro("perfiles",usuario.id);
      if(perfil){
        setPerfil(perfil);
        setError(`Perfil cargado correctamente.`);
      }
    }catch(error){
      setError(`Ha ocurrido un error al intentar obtener el perfil: ${error.message}`);
    }
  }

  const actualizarDatosPerfil = (evento) =>{
    const {name, value} = evento.target;
    setDatosPerfil({...datosPerfil, [name] : value})
  }

  const editarDatosPerfil = async () =>{
    try{
      const respuesta = await editarDato("perfiles", usuario.id, datosPerfil);
      if(respuesta){
        traerPerfilUsuario();
        setDatosPerfil(datosPerfilIniciales);
        setError(`Perfil actualizado correctamente.`);
      }
    }catch(error){
      setError(`Ha ocurrido un error al intentar actualizar los datos del perfil: ${error.message}`);
    }
  }

  useEffect(() =>{
    traerPerfilUsuario();
  }, [usuario])

const datos = {perfil, datosPerfil, actualizarDatosPerfil, editarDatosPerfil};
  return (
    <contextoPerfiles.Provider value={datos}>
        {children}
    </contextoPerfiles.Provider>
  );
}

export default ProveedorPerfil;
export{contextoPerfiles};

