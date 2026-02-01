import React from "react";
import useProductos from "./hooks/useProductos";

const AnyadirProducto = () => {
  const { datosProductos } = useProductos();
  return (
    <div className="formulario">
      <h2>Añadir Producto</h2>
      <label htmlFor="nombre">Nombre: </label>
      <input
        type="text"
        name="nombre"
        id="nombre"
        placeholder="Nombre del Producto."
        value={datosProductos.nombre}
        onChange={(evento) => {
          actualizarDato(evento);
        }}
      />
      <br />
      <br />
      <label htmlFor="precio">Precio: </label>
      <input
        type="number"
        name="precio"
        id="precio"
        placeholder="0,00€"
        value={datosProductos.precio}
        onChange={(evento) => {
          actualizarDato(evento);
        }}
      /><br/><br/>
      <label htmlFor="imagen">URL Imagen: </label>
      <input
        type="text"
        name="imagen"
        id="imagen"
        placeholder="Https://...."
        value={datosProductos.imagen}
        onChange={(evento) => {
          actualizarDato(evento);
        }}
      />
    </div>
  );
};

export default AnyadirProducto;
