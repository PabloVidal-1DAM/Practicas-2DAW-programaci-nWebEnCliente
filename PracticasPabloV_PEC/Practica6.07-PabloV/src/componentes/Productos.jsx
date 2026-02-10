import React from "react";
import useProductos from "./hooks/useProductos";
import "./Productos.css";
import Producto from "./Producto";
import Detalles from "./Detalles";
import useContextListaCompra from "./hooks/useContextListaCompra";

const Productos = () => {
  const { listaFiltrada, valorFiltro, cargando} = useProductos();
  const {listaSeleccionada, setListaSeleccionada, navegar} = useContextListaCompra();

  const volverAListas = () =>{
    setListaSeleccionada(null);
    navegar("/listaCompra");
  }

  return (
    <div className="AccionesPrincipalesApp">
      <h2 className="titulo-seccion">Catálogo de Productos</h2>

      { listaSeleccionada && <><p>Añadiendo productos a: 
        <span className="listaActual">{listaSeleccionada.nombre}</span></p>
        <button onClick={() =>{volverAListas();}}>Dejar de Añadir</button></>}

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
