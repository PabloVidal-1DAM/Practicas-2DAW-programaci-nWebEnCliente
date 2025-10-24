import React from "react";
// He optado por importar un objeto JSON externo que almacena los productos.
import productos from "../../../json/productos.json";
import "./Productos.css";
import { useNavigate } from "react-router-dom";
import {navegarInicio} from "./biblioteca.js";

const Productos = () => {

  const navigate = useNavigate();

  return (
    <div>
      <h1>Página de Productos</h1>
      {/*Se recorre el objeto añadiendolo a una lista*/}
      {productos.Productos.length > 0 ? (
        <ul>
          {productos.Productos.map((producto, indice, array) => {
            return (
              <div className="elementosLista">
                <li key={producto.id}>
                  <strong>ID:</strong> {producto.id} <br />
                  <strong>Nombre:</strong> {producto.nombre} <br />
                  <strong>Precio:</strong> ${producto.precio} <br />
                  <strong>Categoría:</strong> {producto.categoria} <br />
                  <strong>Stock:</strong> {producto.stock}
                </li>
              </div>
            );
          })}
        </ul>
      ) : (
        "No hay productos Disponibles"
      )}

      {/*Llamada a función externa que navega a la página de inicio.*/}
      <button onClick={() => {
        navegarInicio(navigate)
      }
      }>Volver a Inicio</button>
    </div>
  );
};

export default Productos;
