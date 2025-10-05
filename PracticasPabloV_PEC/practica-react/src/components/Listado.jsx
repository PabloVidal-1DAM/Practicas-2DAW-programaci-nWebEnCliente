import React from "react";

const Listado = (props) => {

    const dato = props.dato;

  return (
    <div className="elementosComponente">
        <li>
          {dato}
        </li>
    </div>
  );
};

export default Listado;
