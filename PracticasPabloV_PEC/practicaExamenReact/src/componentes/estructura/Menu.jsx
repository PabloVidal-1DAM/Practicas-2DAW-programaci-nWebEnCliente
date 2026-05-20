import React from 'react'
import {Link} from 'react-router-dom'

const Menu = () => {
  return (
    <>
    <Link to={'/'} >Inicio</ Link>
    <Link to={'/catalogo'} >Catalogo</Link>

    <Link to={'/discografias'} >Discografias</Link>
    <Link to={'/discografias/añadir'} >Añadir Discografias</Link>

    <Link to={'/interpretes'} >Intrepretes</Link>
    <Link to={'/interprete/añadir'} >Añadir Interpretes</Link>

    <Link to={'/discos'} >Discos</Link>
    <Link to={'/discos/añadir'} >Añadir discos</Link>
    </>
  )
}

export default Menu
