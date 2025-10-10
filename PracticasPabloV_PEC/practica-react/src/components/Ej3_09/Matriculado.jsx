import React from "react";
import "./Matriculado.css";

const Matriculado = (props) => {
  const dato = props.dato;
  const desmatricular = props.funcion;
  return (
    <>
      <div className="elementosMatriculado">
        <p>Id: {dato.id}</p>
        <p>
          Nombre: {dato.nombre} {dato.apellidos}
        </p>
        <p>Curso: {dato.curso}</p>
        <p>Aficiones: {dato.aficiones.join(", ")}</p>
        <p>Comida favorita: {dato.comida}</p>
        <div className="btnEliminar">
          <button
            onClick={() => {
              // Al hacer clic, llamamos a la función del padre y le pasamos el id
              desmatricular(dato.id);
            }}
          >
            Desmatricular
          </button>
        </div>
      </div>
    </>
  );
};

export default Matriculado;
