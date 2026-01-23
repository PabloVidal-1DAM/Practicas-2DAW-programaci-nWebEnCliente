import React from "react";
import "./Cabecera.css";
import useSesion from "../hooks/useSesion";

const Cabecera = () => {

  const {usuario, sesionIniciada} = useSesion();

  return (
    <div>
      <header>
        <h1 className="h1_css">App Lista de la compra</h1>
        {sesionIniciada && <p>Bienvenido, {usuario.user_metadata?.display_name}.</p>}
      </header>
    </div>
  );
};

export default Cabecera;
