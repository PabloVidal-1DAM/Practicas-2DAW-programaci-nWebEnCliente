import React from "react";

const Matriculado = (props) => {
  const dato = props.dato;
  return (
    <>
      <div>
        <p>Id: {dato.id}</p>
        <p>
          Nombre: {dato.nombre} {dato.apellidos}
        </p>
        <p>Curso: {dato.curso}</p>
        <p>Aficiones: {dato.aficiones.join(", ")}</p>
        <p>Comida favorita: {dato.comida}</p>
      </div>
    </>
  );
};

export default Matriculado;
