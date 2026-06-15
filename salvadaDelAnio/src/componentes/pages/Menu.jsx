import React from "react";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <>
      <Link to={"/"}>Inicio</Link>
      <Link to={"/error"}>Error</Link>
      <Link to={"/expediente"}>Expediente de discentes</Link>
      <Link to={"/docente"}>Vista de docente</Link>
    </>
  );
};

export default Menu;
