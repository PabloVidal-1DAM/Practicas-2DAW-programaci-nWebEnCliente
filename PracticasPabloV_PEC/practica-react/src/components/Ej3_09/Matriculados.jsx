import React, { useState } from "react";
import discente from "../../json/matriculados.json";
import Matriculado from "./Matriculado";
import "./Matriculados.css";

const Matriculados = () => {
  const [discentes, setDiscentes] = useState(discente.discentes);
  const [ordenAscendente, setOrdenAscendente] = useState(true);

  const solo2DAW = () => {
    let discentesFiltrado = discentes.filter((valor, indice, array) => {
      return valor.curso === "2DAW";
    });

    setDiscentes(discentesFiltrado);
  };

  const soloPrimerCurso = () => {
    let discentesFiltrado = discentes.filter((valor, indice, array) => {
      return valor.curso.includes("1");
    });
    setDiscentes(discentesFiltrado);
  };

  const soloDAW = () =>{
    let discentesFiltrado = discentes.filter((valor,indice,array) =>{
        return(
            valor.curso.includes("DAW")
        )
    })
    setDiscentes(discentesFiltrado);
  }

  const ordenarApellidos = () =>{
    let discentesOrdenado = discentes.sort((a,b) =>{
        if (a.apellidos < b.apellidos){
            return ordenAscendente ? -1 : 1
        }
        if (a.apellidos > b.apellidos){
            return ordenAscendente ? 1: -1
        }
        return 0;
    })
    setDiscentes(discentesOrdenado);
    setOrdenAscendente(!ordenAscendente);

  }

  const eliminarDiscente = (id) =>{
    let discentesFiltrado = discentes.filter((valor,indice,array) =>{
      return(
        valor.id !== id
      )
    })
    setDiscentes(discentesFiltrado);
  }

  return (
    <>
      <div>
        <button
          onClick={() => {
            solo2DAW();
          }}
        >
          Mostrar solo 2DAW
        </button>

        <button
          onClick={() => {
            soloPrimerCurso();
          }}
        >
          Mostrar solo primer curso
        </button>

        <button
          onClick={() => {
            soloDAW();
          }}
        >
          Mostrar curso DAW
        </button>

                <button
          onClick={() => {
            ordenarApellidos();
          }}
        >
          Cambiar Orden
        </button>

        {discentes.map((discente, indice, array) => {
          return <Matriculado key={indice} dato={discente} funcion={eliminarDiscente} />;
        })}
      </div>
    </>
  );
};

export default Matriculados;
