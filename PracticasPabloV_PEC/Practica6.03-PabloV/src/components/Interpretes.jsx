import React, { useState } from "react";

const Interpretes = ({ interpretes }) => {
  const [seleccionado, setSeleccionado] = useState(null);

  const alternarVisualizado = (i) =>{
    if (seleccionado === i){
        setSeleccionado(null);
    }
    setSeleccionado(i);
  }
  return (
    <>
      <h3>Interpretes:</h3>

      {interpretes.length ? (
        interpretes.map((interprete, i) => {
          return (
            <>
              <p key={i} onClick={() => alternarVisualizado(i)} className="nombreInterpretes">
                {interprete.value.name}
              </p>
              <hr/>
              {seleccionado === i && (
                <div>
                  <p>Altura: {interprete.value.height} cm</p>
                  <p>Género: {interprete.value.gender}</p>
                  <p>Peso: {interprete.value.mass}</p>
                  <p>Color de pelo: {interprete.value.hair_color}</p>
                  <p>Color de ojos: {interprete.value.eye_color}</p>
                </div>
              )}
            </>
          );
        })
      ) : (
        <p>No hay Interpretes disponibles</p>
      )}
    </>
  );
};

export default Interpretes;
