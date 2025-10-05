import React, { useState } from "react";
import Contador from "./Contador";

const ContadorLimite = () => {

  let [contadorLimite, setContador] = useState(0);

    const incrementar = () => {
        if (contadorLimite <10){
            setContador(contadorLimite+1);
        }
    }

    const decrementar = () =>{
        if (contadorLimite > 0){
            setContador(contadorLimite-1);
        }  
    }



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

          {!Array.isArray(contadorLimite) && contadorLimite >= 0 ? (
                <Contador dato={contadorLimite} />
          )  : ("No existe ningún contador")}

      </div>
    </>
  );
};

export default ContadorLimite;
