import React from "react";
import useProductos from "./hooks/useProductos";
import Acciones from "./Acciones";
import useAuth from "./hooks/useAuth";

const Detalles = () => {
  const { numProductos, precioMedio } = useProductos();
  const {sesionIniciada} = useAuth();
  return (
    <>
    {/*A menos que el usuario no esté logeado no puede ver el menú de acciones para filtrar o ordenar */}
       {sesionIniciada && <Acciones />}
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
    </>
  );
};

export default Detalles;
