import React, { useState } from "react";
import discente from "../../json/matriculados.json";
import Matriculado from "./Matriculado";
import "./Matriculados.css";

import {
  filtrar2DAW,
  filtrarPrimerCurso,
  filtrarDAW,
  ordenarPorApellidos,
  eliminarPorId,
} from "./biblioteca/biblioteca.js";

const Matriculados = () => {
  const [discentes, setDiscentes] = useState(discente.discentes);
  const [ordenAscendente, setOrdenAscendente] = useState(true);

  const solo2DAW = () => setDiscentes(filtrar2DAW(discente.discentes));
  const soloPrimerCurso = () =>
    setDiscentes(filtrarPrimerCurso(discente.discentes));
  const soloDAW = () => setDiscentes(filtrarDAW(discente.discentes));

  const ordenarApellidos = () => {
    setDiscentes(ordenarPorApellidos(discentes, ordenAscendente));
    setOrdenAscendente(!ordenAscendente);
  };

  const eliminarDiscente = (id) => {
    setDiscentes(eliminarPorId(discentes, id));
  };

  const reiniciarDiscente = () =>{
    setDiscentes(discente.discentes);
  };

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

        <button
          onClick={() => {
            reiniciarDiscente();
          }}
        >
          Reiniciar
        </button>

        {discentes.map((discente, indice, array) => {
          return (
            <Matriculado
              key={indice}
              dato={discente}
              funcion={eliminarDiscente}
            />
          );
        })}
      </div>
    </>
  );
};

export default Matriculados;
