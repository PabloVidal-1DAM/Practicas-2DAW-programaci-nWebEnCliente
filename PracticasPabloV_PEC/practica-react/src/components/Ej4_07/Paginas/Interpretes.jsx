import React from "react";
import interpretes_json from "../../../json/Interpretes.json";
import "./Interpretes.css";

const Interpretes = () => {
  return (
    <div>
      <h1>Esta es la página de Intérpretes.</h1>
      {interpretes_json.Interpretes.length > 0
        ? interpretes_json.Interpretes.map((interprete, indice, array) => {
            return (
              <div>
                <h2>{interprete.nombre}</h2>
                <img src={interprete.src} />
                <p>{interprete.descripcion}</p>
              </div>
            );
          })
        : "No hay Intérpretes que mostrar"}
    </div>
  );
};

export default Interpretes;
