import React from "react";
import useProductos from "./hooks/useProductos";
import "./Acciones.css";

const Acciones = () => {
  const {
    valorFiltro,
    setValorFiltro,
    filtrarPorNombre,
    filtrarPorPeso,
    filtrarPorPrecio,
    resetearFiltro,
    ordenarPorNombre,
    ordenarPorPeso,
    ordenarPorPrecio,
  } = useProductos();
  return (
    <div className="formularioAcciones">
      <h3>Acciones sobre los productos</h3>

      <div className="fila-acciones">
        <label>Filtrar:</label>
        <input
          type="text"
          placeholder="Valor a Filtrar:"
          value={valorFiltro}
          onChange={(e) => setValorFiltro(e.target.value)}
        />
        <div className="grupo-botones">
          <button onClick={() => filtrarPorNombre(valorFiltro)}>Nombre</button>
          <button onClick={() => filtrarPorPrecio(valorFiltro)}>Precio</button>
          <button onClick={() => filtrarPorPeso(valorFiltro)}>Peso</button>
        </div>
      </div>

      <div className="fila-acciones">
        <label>Ordenar:</label>
        <div className="grupo-botones">
          <button onClick={ordenarPorNombre}>Nombre</button>
          <button onClick={ordenarPorPrecio}>Precio</button>
          <button onClick={ordenarPorPeso}>Peso</button>
        </div>
      </div>
      <div className="fila-acciones">
        <label>Resetear:</label>
        <div className="grupo-botones">
          <button onClick={() => resetearFiltro()}>Resetear</button>
        </div>
      </div>
    </div>
  );
};

export default Acciones;
