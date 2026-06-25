import React from "react";
import useContextEmpresas from "../hooks/useContextEmpresas";
import useContextTrabajadores from "../hooks/useContextTrabajadores";
import Trabajador from "./Empresa";

const Trabajadores = () => {
  const { trabajadores, cargando, errores } = useContextTrabajadores();
  return (
    <>
      {errores ? (
        <div>Existen errores: {errores}</div>
      ) : cargando ? (
        <div> cargando los trabajadores</div>
      ) : (
        <>
        <h2>Los trabajadores</h2>
         {trabajadores.map((trabajador) =>{
          return <Trabajador key={trabajador.id} trabajador={trabajador} />
         })}
        </>
      )}
    </>
  );
};

export default Trabajadores;
