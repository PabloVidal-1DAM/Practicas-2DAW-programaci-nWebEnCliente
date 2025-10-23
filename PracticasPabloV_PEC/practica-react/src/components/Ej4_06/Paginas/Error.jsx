import React from "react";
import {navegarInicio} from "./biblioteca.js";
import { useNavigate } from "react-router-dom";

const Error = () => {

  const navigate = useNavigate();

  return (
    <div>
      <h1>Error 404: Página no encontrada.</h1>
      <button
        onClick={() => {
          navegarInicio(navigate);
        }}
      >
        Volver a Inicio
      </button>
    </div>
  );
};

export default Error;
