import React, { useRef } from "react";
import Interprete from "./Interprete";
import {ocultar} from "./biblioteca.js"
import Interpretes_json from "../../json/Interpretes.json";
import "./Interpretes.css";

// Funciona prácticamente igual que Taquilla.jsx.
const Interpretes = () => {
  // Importación de los intérpretes de manera externa, desde un JSON.
  const datosInterpretes = Interpretes_json;
  // Referencia que por el momento no apunta a nada.
  const referenciaInterprete = useRef(null);

  return (
    <>
      <button
        onClick={() => {
          // Llamada a función externa que se encarga de ocultar la referencia.
          ocultar(referenciaInterprete);
        }}
      >
        Interpretes
      </button>
      {/*La referencia esta vez apunta a un contenedor <div>*/}
      <div ref={referenciaInterprete} className="oculto">
        {datosInterpretes.Interpretes.map((actor, index) => (
          <Interprete key={index} nombre={actor.nombre} src={actor.src}>
            {actor.descripcion}
          </Interprete>
        ))}
      </div>
    </>
  );
};

export default Interpretes;
