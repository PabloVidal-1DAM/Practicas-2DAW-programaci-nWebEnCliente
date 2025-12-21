import React, { useState } from "react";
import InterpretePilota from "./../components/InterpetePilota.jsx";

const Interpretes = ({ interpretes }) => {
  const [seleccionado, setSeleccionado] = useState(null);

  const alternarVisualizado = (i) => {
    if (seleccionado === i) {
      setSeleccionado(null);
    } else {
      setSeleccionado(i);
    }
  };

  return (
    <div>
      <h3>Intérpretes:</h3>

      {interpretes.length > 0 ? (
        interpretes.map((interprete, i) => (
            <div key={i} className="contenedor-interprete">
              <p onClick={() => alternarVisualizado(i)} className="nombreInterpretes" style={{ cursor: "pointer" }}>
                {interprete.value.name}
              </p>
              
              <hr />

              {/* Si el índice coincide, se muestra su información y el botón de pilotaje */}
              {seleccionado === i ? (
                <div className="detalle-interprete">
                  <p><strong>Altura:</strong> {interprete.value.height} cm.</p>
                  <p><strong>Género:</strong> {interprete.value.gender}.</p>
                  <p><strong>Peso:</strong> {interprete.value.mass}.</p>
                  <p><strong>Color de pelo:</strong> {interprete.value.hair_color}.</p>
                  <p><strong>Color de ojos:</strong> {interprete.value.eye_color}.</p>
                  
                  {/* Se pasan todos los datos de cada interprete a este componente*/}
                  <InterpretePilota personaje={interprete.value} />
                </div>
              ) : null}
            </div>

        ))
      ) : (
        <p>No hay intérpretes disponibles.</p>
      )}
    </div>
  );
};

export default Interpretes;
