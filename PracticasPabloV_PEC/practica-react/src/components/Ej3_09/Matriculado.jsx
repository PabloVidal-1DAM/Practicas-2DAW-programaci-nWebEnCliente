import React from "react";
import "./Matriculado.css";

const Matriculado = (props) => {
  // Se le pasa como atributo los datos de discente y la función para desmatricular.
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
        <p>Aficiones: {dato.aficiones.join(", ")}</p> {/*El .join(",") es para que se vea mejor visualmente, con commas añadidas entre las aficiones */}
        <p>Comida favorita: {dato.comida}</p>
        <div className="btnEliminar">
          <button
            onClick={() => {
              // Al hacer clic, llamamos a la función del padre y se le pasa el id del discente.
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
