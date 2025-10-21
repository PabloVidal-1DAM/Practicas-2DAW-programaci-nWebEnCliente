import React from "react";
import Interprete from "./Interprete";
import Interpretes_json from "../../json/Interpretes.json";

const Interpretes = () => {
      const datosInterpretes = Interpretes_json;
  return (
    <>
      <div>
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
