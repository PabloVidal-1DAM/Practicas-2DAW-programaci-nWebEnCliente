import React from "react";
import "./Cabecera.css";
import Menu from "../pages/Menu";

const Cabecera = () => {
  return (
    <>
      <div className='cabecera_principal'>
        <h2>Gestión de Notas</h2>
        <p>
          Aplicación para mantener las prácticas de segundo de DAW a través de
          una API.
        </p>
        <Menu />
      </div>
    </>
  );
};

export default Cabecera;
