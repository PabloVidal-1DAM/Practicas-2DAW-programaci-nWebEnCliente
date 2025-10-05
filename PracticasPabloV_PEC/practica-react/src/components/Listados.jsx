import React, { useState } from "react";
import Listado from "./Listado.jsx";
import "./Listados.css";

const Listados = () => {
  let [listado, setListado] = useState([]);

  const anyadirNumero = () => {
    let numeroRandom = Math.floor(Math.random() * 100) + 1;
    setListado([...listado, numeroRandom]);
  };

  return (
    <>
      <div className="Listado_css">
        <h1>Listado</h1>
        <button
          onClick={() => {
            anyadirNumero();
          }}
        >
          Generar
        </button>
        <button>Eliminar</button>
      </div>

      {Array.isArray(listado) && listado.length > 0 ? (
        <ul>
          {listado.map((numero, indice) => (
            <Listado key={indice} dato={numero} />
          ))}
        </ul>
      ) : (
        "No hay números en listado"
      )}
    </>
  );
};

export default Listados;
