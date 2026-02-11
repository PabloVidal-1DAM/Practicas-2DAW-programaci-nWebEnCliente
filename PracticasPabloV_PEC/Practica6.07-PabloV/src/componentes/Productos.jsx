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

      {/*Si el usuario ha seleccionado una lista y ha sido navegado a esta página, se le hace saber que está añadiendo productos.*/}
      {/*Además, en cualquier momento puede dejar de añadir y volver a las listas.*/}
      { listaSeleccionada && <><p>Añadiendo productos a: 
        <span className="listaActual">{listaSeleccionada.nombre}</span></p>
        <button onClick={() =>{volverAListas();}}>Dejar de Añadir</button></>}

      <div className="productos-grid">
        {listaFiltrada.length > 0 ? (
          listaFiltrada.map((producto) => (
            <Producto key={producto.id} producto ={producto} />
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
