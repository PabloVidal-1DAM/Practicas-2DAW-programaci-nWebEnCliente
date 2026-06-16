import React from "react";
import { useNavigate } from "react-router-dom";

const Discente = ({ discente }) => {

    const navegar = useNavigate();
  return (
    <div onClick={() =>{navegar(`${discente.id}`)}}>
      <h3>{discente.nombre}</h3>
      <p>
        <span style={{ color: "blue", marginRight: "20px" }}>Correo: </span>
        {discente.correo}
      </p>
    </div>
  );
};

export default Discente;
