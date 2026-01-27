import React from 'react'
import useProductos from './hooks/useProductos'

const Detalles = () => {
    const {numProductos, precioMedio } = useProductos();
  return (
        <div className="resumen-productos">
          <div className="dato-resumen">
            <span className="etiqueta">Productos totales:</span>
            <span className="valor">{numProductos}</span>
          </div>
          <div className="dato-resumen">
            <span className="etiqueta">Precio medio del catálogo:</span>
            <span className="valor">{precioMedio}€</span>
          </div>
        </div>
  )
}

export default Detalles
