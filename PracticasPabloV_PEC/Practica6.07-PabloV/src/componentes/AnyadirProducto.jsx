import React from "react";
import useProductos from "./hooks/useProductos";

const AnyadirProducto = () => {
  const {
    datosProductos,
    actualizarDatosProductos,
    anyadirProducto,
    editando,
    modificarProducto,
    cancelarModoEditar,
  } = useProductos();
  return (
    <div className="formulario">
      <h2>{editando ? "Editar Producto" : "Añadir Producto"}</h2>
      <label htmlFor="nombre">Nombre: </label>
      <input
        type="text"
        name="nombre"
        id="nombre"
        placeholder="Nombre del Producto."
        value={datosProductos.nombre}
        onChange={(evento) => {
          actualizarDatosProductos(evento);
        }}
      />
      <br />
      <br />
      <label htmlFor="peso">Peso: </label>
      <input
        type="number"
        name="peso"
        id="peso"
        placeholder="300g..."
        value={datosProductos.peso}
        onChange={(evento) => {
          actualizarDatosProductos(evento);
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
          actualizarDatosProductos(evento);
        }}
      />
      <br />
      <br />
      <label htmlFor="url">URL Imagen: </label>
      <input
        type="text"
        name="url"
        id="url"
        placeholder="Https://...."
        value={datosProductos.url}
        onChange={(evento) => {
          actualizarDatosProductos(evento);
        }}
      />
      <br />
      <br />
      <label htmlFor="descripcion">Descripcion: </label>
      <input
        type="text"
        name="descripcion"
        id="descripcion"
        placeholder="Galletitas saladas..."
        value={datosProductos.descripcion}
        onChange={(evento) => {
          actualizarDatosProductos(evento);
        }}
      />
      <br />
      <br />
      <button
        className="Guardar"
        onClick={() => {
            editando ?  modificarProducto() : anyadirProducto();
        }}
      >
        {editando ? "Enviar cambios" : "Guardar Producto"}
      </button>
      {editando && (
        <>
          <button onClick={cancelarModoEditar} style={{ backgroundColor: "#666" }}>
            Cancelar
          </button>
        </>
      )}
    </div>
  );
};

export default AnyadirProducto;
