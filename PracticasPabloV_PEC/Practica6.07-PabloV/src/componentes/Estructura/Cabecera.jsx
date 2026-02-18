import React from "react";
import "./Cabecera.css";
import useAuth from "../hooks/useAuth";
import {Link} from "react-router-dom";

const Cabecera = () => {

  const {usuario, sesionIniciada} = useAuth();

  return (
    <div>
      <header>
        <h1 className="h1_css">App Lista de la compra</h1>
        {sesionIniciada && <p>Bienvenido, {usuario.user_metadata?.display_name}.</p>}
        <Link to={"/perfil"} className="botonNav">Perfil</Link>
      </header>
    </div>
  );
};

export default Cabecera;
