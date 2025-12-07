import React from 'react'

const Pelicula = ({nombre, pelicula, setPeliculaSeleccionada}) => {

    const mostrarDetalle = () =>{
        setPeliculaSeleccionada(pelicula);
    }

  return (
    <li onClick={() => mostrarDetalle()} className='lista'>
       {nombre}
    </li>
  )
}

export default Pelicula
