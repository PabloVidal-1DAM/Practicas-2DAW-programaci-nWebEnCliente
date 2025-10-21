import React, { useRef } from "react";
import Interprete from "./Interprete";
import Interpretes_json from "../../json/Interpretes.json";
import "./Interpretes.css";

const Interpretes = () => {
  const datosInterpretes = Interpretes_json;
  const referenciaInterprete = useRef(null);

  const ocultarInterprete = (referencia) => {
    referencia.current.classList.toggle("oculto");
  };

  return (
    <>
      <button
        onClick={() => {
          ocultarInterprete(referenciaInterprete);
        }}
      >
        Interpretes
      </button>
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
