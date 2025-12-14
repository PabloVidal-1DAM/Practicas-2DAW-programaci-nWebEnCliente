import React from 'react'

const Pelicula = ({nombre, pelicula, setPeliculaSeleccionada}) => {

    // Aquí se usa el setter que se inició en "Interfaz.jsx" para 
    // elevar esa información hasta allí y cargarlo en otro componente.
    const mostrarDetalle = () =>{
        setPeliculaSeleccionada(pelicula);
    }

  return (
    <>
    {/*Se añade un evento a los titulos de las peliculas para mostrar el detalle de la seleccionada.*/}
      <li onClick={() => mostrarDetalle()} className='lista'>
        {nombre}
      </li>
      <hr />
    </>
  )
}

export default Pelicula
