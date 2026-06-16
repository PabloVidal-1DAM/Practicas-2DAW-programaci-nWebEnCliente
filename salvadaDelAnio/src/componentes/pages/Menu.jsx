import React from "react";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <>
      <Link to={"/"} style={{marginRight: "10px"}}>Inicio</Link>
      <Link to={"/error"} style={{marginRight: "10px"}}>Error</Link>
      <Link to={"/expediente"} style={{marginRight: "10px"}}>Expediente de discentes</Link>
      <Link to={"/docente"} style={{marginRight: "10px"}}>Vista de docente</Link>
    </>
  );
};

export default Menu;
