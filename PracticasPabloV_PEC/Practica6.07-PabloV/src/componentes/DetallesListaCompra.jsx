import React from 'react'
import useContextListaCompra from "./hooks/useContextListaCompra"
import useAuth from './hooks/useAuth';
import "./DetallesListaCompra.css";

const DetallesListaCompra = () => {
  const {
    listaSeleccionada,
    eliminarProductoLista,
    borrarTodaLaLista,
    navegar
  } = useContextListaCompra();

  const {mensajeConfirmacion} = useAuth();

  const calcularPesoTotal = () =>{

  }

  const calcularPrecioTotal = () =>{

  }

  return (
    <>
    {!listaSeleccionada.itemslista ? 
    <div className='listaVacía'>
      <h2>La lista "{listaSeleccionada.nombre}" esta vacía</h2>
      <p>Añade productos para empezar a verlos aquí.</p>
      <button onClick={() =>navegar("/productos")}>Pulsa Aquí</button>
    </div> :
     <div>
      
     </div>}
    </>
  )
}

export default DetallesListaCompra
