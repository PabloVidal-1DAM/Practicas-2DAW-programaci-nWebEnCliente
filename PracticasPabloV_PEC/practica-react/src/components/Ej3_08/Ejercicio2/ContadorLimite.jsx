import React, { useState } from "react";
import Contador from "./Contador";

const ContadorLimite = () => {
  // Se crea el estado "contadorLimite" como un array vacío.
  let [contadorLimite, setContador] = useState([]);

  const incrementar = () => {
    // Si el contador es menor que 10, se incrementa su valor.
    if (contadorLimite.length < 10) {
      setContador([...contadorLimite, contadorLimite.length + 1]);
    }
  };

  const decrementar = () => {
    // Si el contador es mayor o igual que 0, se borra la última posición del array con .slice().
    if (contadorLimite.length >= 0) {
      setContador(contadorLimite.slice(0, -1));
    }
  };

  return (
    <>
      <div className="contadorLimite">
        <h1>Contador</h1>

        <button
          onClick={() => {
            incrementar();
          }}
        >
          Incrementar
        </button>

        <button
          onClick={() => {
            decrementar();
          }}
        >
          Decrementar
        </button>
        {/*Se comprueba que el estado sea un array y que contenga datos.*/}
        {Array.isArray(contadorLimite) && contadorLimite.length >= 0 ?
           // Se recorre el array y se llama al componente "Contador" que representa a cada número dentro del array.
            contadorLimite.map((numero, indice) => (
              <Contador key={indice} dato={indice + 1} />
            )) : "No existe ningún contador"}
      </div>
    </>
  );
};

export default ContadorLimite;
