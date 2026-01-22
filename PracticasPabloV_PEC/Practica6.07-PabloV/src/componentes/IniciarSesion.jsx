import React from 'react'
import useSesion from './hooks/useSesion'

const IniciarSesion = () => {
  const {error, setError, actualizarDato, iniciarSesion} = useSesion();
  return (
    <div className='formulario'>
      <h2>Inicia Sesión</h2>

      <label htmlFor='email'>Correo: </label>
      <input type='email' name='email' id='email' placeholder='Inserta tu correo' onChange={(evento) =>{
        actualizarDato(evento);
      }} /><br/><br/>

      <label htmlFor='password'>Contraseña: </label>
      <input type='password' name='password' id='password' placeholder='Introduce tu contraseña' onChange={(evento) =>{
        actualizarDato(evento);
      }} /><br/><br/>

      <button className='botonSesion' onClick={(evento) =>{
        iniciarSesion();
      }}>Iniciar Sesion</button>

      <p>{error}</p>
      
    </div>
  )
}

export default IniciarSesion
