import React from "react";

const Listado = (props) => {

    const {key, dato} = props.datos;

  return (
    <div className="elementosComponente">
      <ul>
        <li key={key}>
          {dato}
        </li>
      </ul>
    </div>
  );
};

export default Listado;
