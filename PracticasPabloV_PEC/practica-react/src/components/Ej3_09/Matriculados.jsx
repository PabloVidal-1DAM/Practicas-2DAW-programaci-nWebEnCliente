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
  // Estado que almacena el array de objetos discentes.
  const [discentes, setDiscentes] = useState(discente.discentes);

  // Estado que almacen el orden actual del objeto, empieza en ascendente.
  const [ordenAscendente, setOrdenAscendente] = useState(true);

  // Función que se pasará como atributo al componente "Matriculado", ya que aquí no se puede acceder a su id.
  const eliminarDiscente = (id) => {
    setDiscentes(eliminarPorId(discentes, id));
  };
  // Esta función no es importada desde biblioteca.js porque no ocupa mucho, me he aclarado mejor aquí.
  const reiniciarDiscente = () => {
    setDiscentes(discente.discentes);
  };

  return (
    <>
    {/*A partir de aquí, el resto de funciones se importan y se usan desde "biblioteca.js".*/}
      <div>
        <button
          onClick={() => {
            setDiscentes(filtrar2DAW(discente.discentes));
          }}
        >
          Mostrar solo 2DAW
        </button>

        <button
          onClick={() => {
            setDiscentes(filtrarPrimerCurso(discente.discentes));
          }}
        >
          Mostrar solo primer curso
        </button>

        <button
          onClick={() => {
            setDiscentes(filtrarDAW(discente.discentes));
          }}
        >
          Mostrar curso DAW
        </button>

        <button
          onClick={() => {
            setDiscentes(ordenarPorApellidos(discentes, ordenAscendente));
            // El orden cambia al pulsar el boton, alternando entre ascendente y descendente.
            setOrdenAscendente(!ordenAscendente);
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
        
        {/* Se recorre la información del estado y se llama al componente "Matriculado" para dar forma a esos datos.*/}
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
