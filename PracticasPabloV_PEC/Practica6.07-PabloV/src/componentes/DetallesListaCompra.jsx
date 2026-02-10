import React from 'react'
import useContextListaCompra from "./hooks/useContextListaCompra"
import useAuth from './hooks/useAuth';

const DetallesListaCompra = () => {
  const {
    listaSeleccionada,
    eliminarProductoLista,
    borrarTodaLaLista
  } = useContextListaCompra();

  const {mensajeConfirmacion, setError} = useAuth();
  return (
    <>
    {!listaSeleccionada ? setError("No has seleccionado una lista, Vuelve atrás y pincha sobre una lista para ver sus detalles.") :
     <div>
      
     </div>}
    </>
  )
}

export default DetallesListaCompra
