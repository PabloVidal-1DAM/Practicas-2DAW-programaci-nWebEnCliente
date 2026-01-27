import React from 'react'
import "./Formulario.css";
import useAuth from './hooks/useAuth';

const IniciarSesion = () => {
  const {error, setError, actualizarDato, logearUsuario, datosSesion} = useAuth();
  return (
    <div className='formulario'>
      <h2>Inicia Sesión</h2>

      <label htmlFor='email'>Correo: </label>
      <input type='email' name='email' id='email' placeholder='Inserta tu correo' value={datosSesion.email} onChange={(evento) =>{
        actualizarDato(evento);
      }} /><br/><br/>

      <label htmlFor='password'>Contraseña: </label>
      <input type='password' name='password' id='password' placeholder='Introduce tu contraseña' value={datosSesion.password} onChange={(evento) =>{
        actualizarDato(evento);
      }} /><br/><br/>

      <button className='botonSesion' onClick={(evento) =>{
        logearUsuario();
      }}>Iniciar Sesion</button>
    </div>
  )
}

export default IniciarSesion
