import React from "react";
import useContextDiscentes from "../hooks/useContextDiscentes";
import Discente from "../pages/Discente";

const Discentes = () =>{
  const {discentes, cargando, errores} = useContextDiscentes();
  return (
    <>
    <h2>Discentes: </h2>
    {discentes.map((discente) =>{
      return <Discente key={discente.id} discente={discente} />
    })}
    </>
  );
}

export default Discentes;