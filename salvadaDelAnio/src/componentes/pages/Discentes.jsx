import React from "react";
import useContextDiscentes from "../hooks/useContextDiscentes";
import Discente from "./Discente";

const Discentes = () => {
  const { discentes } = useContextDiscentes();
  console.log(discentes);
  return <>
  {discentes.map((discente) =>{
    return <Discente key={discente.id} discente={discente} />
  })}
  </>;
};

export default Discentes;
