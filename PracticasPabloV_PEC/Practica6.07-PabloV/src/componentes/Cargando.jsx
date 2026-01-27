import React from "react";
import useProductos from "./hooks/useProductos";
import "./Cargando.css";

const Cargando = ({children}) => {
  const { cargando } = useProductos();
  return (
    <>
      {cargando ? (
        <div className="cargando-contenedor">
          <h2>⏳ Estoy cargando tontito...</h2>
        </div>
      ) : (
        children
      )}
    </>
  );
};

export default Cargando;
