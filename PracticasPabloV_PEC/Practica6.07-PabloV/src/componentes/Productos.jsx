import React from "react";
import useProductos from "./hooks/useProductos";
import "./Productos.css";
import useSesion from "./hooks/useSesion";
import Producto from "./Producto";
import Detalles from "./Detalles";

const Productos = () => {
  const { listaProductos, cargando} = useProductos();
  console.log(listaProductos);
  return (
    <div className="AccionesPrincipalesApp">
      <h2 className="titulo-seccion">Catálogo de Productos</h2>

      <div className="productos-grid">
        {listaProductos.length > 0 ? (
          listaProductos.map((producto, i) => (
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
