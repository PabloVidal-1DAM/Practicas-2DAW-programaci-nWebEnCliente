import React from "react";
import useContextListaCompra from "./hooks/useContextListaCompra";

const AnyadirListaCompra = () => {
  const { datosListaCompra, actualizarDatosListaCompra, guardarListaCompra } =
    useContextListaCompra();
  return (
    <div className="formulario">
      <h2>Añadir Lista de la Compra</h2>
      <label htmlFor="nombre">Nombre:</label>
      <input
        type="text"
        name="nombre"
        id="nombre"
        placeholder="Nombre de la lista."
        value={datosListaCompra.nombre}
        onChange={(evento) => {
          actualizarDatosListaCompra(evento);
        }}
      />
      <br />
      <br />
      <button
        className="Guardar"
        onClick={(evento) =>{guardarListaCompra()}}
      >
        Guardar Lista
      </button>
    </div>
  );
};

export default AnyadirListaCompra;
