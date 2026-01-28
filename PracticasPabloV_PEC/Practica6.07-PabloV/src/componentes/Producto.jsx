import React from "react";

const Producto = ({ producto }) => {
  return (
    <div key={producto.id} className="producto-card">
      <div className="producto-imagen">
        <img src={producto.url} alt={producto.nombre} />
      </div>

      <div className="producto-info">
        <h3>{producto.nombre}</h3>
        <p className="descripcion">{producto.descripcion}</p>

        <div className="detalles-tecnicos">
          <span>
            <strong>Peso: {producto.peso}g</strong>
          </span>
          <span className="precio">{producto.precio}€</span>
        </div>
      </div>
    </div>
  );
};

export default Producto;
