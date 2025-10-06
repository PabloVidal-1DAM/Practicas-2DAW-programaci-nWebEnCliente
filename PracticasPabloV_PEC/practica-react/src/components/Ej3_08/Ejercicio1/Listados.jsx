import React, { useState } from "react";
import Listado from "./Listado.jsx";
import "./Listados.css";

const Listados = () => {

  // Se crea un estado llamado "listado" y empieza siendo un arrat vacío.
  let [listado, setListado] = useState([]);

  const anyadirNumero = () => {
    // Se genera un numero random del 1 al 100 que se añade al estado usando su setter.
    let numeroRandom = Math.floor(Math.random() * 100) + 1;
    // Shallow copy para copiar todo lo anterior del estado + el número nuevo generado.
    setListado([...listado, numeroRandom]);
  };

  const borrarNumeros = () =>{
    // Se borra toda la anterior información cambiando el valor del estado en un array vacío.
    setListado([]);
  }

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
        <button onClick={() =>{
          borrarNumeros();
        }}>Eliminar</button>
      </div>
      
      {/*Antes de recorrer el estado, se comprueba que es un array y que contiene datos.*/}
      {Array.isArray(listado) && listado.length > 0 ? (
        <ul>
          {/* Se recorre el array y se llama al componente "Listado", que representa a cada elemento del array.*/}
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
