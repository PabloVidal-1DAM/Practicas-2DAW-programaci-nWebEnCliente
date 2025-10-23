import React from "react";
import {navegarInicio} from "./biblioteca.js";
import { useNavigate } from "react-router-dom";

const Contacto = () => {

  const navigate = useNavigate();

  return (
    <div>
      <h1>Página de Contacto</h1>

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

export default Contacto;
