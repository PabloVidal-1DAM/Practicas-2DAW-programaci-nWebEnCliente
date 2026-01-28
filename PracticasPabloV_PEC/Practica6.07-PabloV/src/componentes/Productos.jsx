import React from "react";
import useProductos from "./hooks/useProductos";
import "./Productos.css";
import Producto from "./Producto";
import Detalles from "./Detalles";

const Productos = () => {
  const { listaFiltrada, valorFiltro, cargando} = useProductos();
  return (
    <div className="AccionesPrincipalesApp">
      <h2 className="titulo-seccion">Catálogo de Productos</h2>

      <div className="productos-grid">
        {listaFiltrada.length > 0 ? (
          listaFiltrada.map((producto, i) => (
            <Producto key={i} producto ={producto} />
          ))
        ) : (
          <p>No hay productos disponibles actualmente.</p>
        )}
      </div>
        <Detalles />
    </div>
  );
};

export default Productos;
