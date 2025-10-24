import React from "react";
import {navegarInicio} from "./biblioteca.js";
import { useNavigate } from "react-router-dom";

const AcercaDe = () => {

  const navigate = useNavigate();

  return (
    <div>
      <h1>Página de Acerca-de</h1>

      {/*Llamada a función externa que navega a la página de inicio.*/}
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

export default AcercaDe;
