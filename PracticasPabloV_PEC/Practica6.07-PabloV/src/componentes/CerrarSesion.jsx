import React from 'react'
import useSesion from './hooks/useSesion'

const CerrarSesion = () => {
  const {cerrarSesion} = useSesion();
  return (
    <div className='div-cerrarSesion'>
      <h3>¿Deseas salir?</h3>
      <button onClick={() =>{
        cerrarSesion();
      }}>
        Cerrar Sesión
      </button>
    </div>
  )
}

export default CerrarSesion
