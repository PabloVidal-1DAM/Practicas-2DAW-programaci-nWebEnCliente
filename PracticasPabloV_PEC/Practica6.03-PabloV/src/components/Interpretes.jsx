import React, { useState } from "react";

const Interpretes = ({ interpretes }) => {

  const [seleccionado, setSeleccionado] = useState(null);

  // Solo asigna el valor al estado si no coincide con el que se pasa por atributo.
  const alternarVisualizado = (i) =>{
    if (seleccionado === i){
        setSeleccionado(null);
    }
    setSeleccionado(i);
  }
  return (
    <div>
      <h3>Interpretes:</h3>

      {/*Se recorre el estado que se le pasa como props para mostrar, en un principio, solo el nombre. */}
      {interpretes.length ? (
        interpretes.map((interprete, i) => {
          return (
            <div key={i}>
              <p onClick={() => alternarVisualizado(i)} className="nombreInterpretes">
                {interprete.value.name}
              </p>
              <hr/>
              {/*Si el usuario ha seleccionado algún interprete, se muestra su información extra.*/}
              {seleccionado === i && (
                <div>
                  <p><strong>Altura:</strong> {interprete.value.height} cm.</p>
                  <p><strong>Género:</strong> {interprete.value.gender}.</p>
                  <p><strong>Peso:</strong> {interprete.value.mass}.</p>
                  <p><strong>Color de pelo:</strong> {interprete.value.hair_color}.</p>
                  <p><strong>Color de ojos:</strong> {interprete.value.eye_color}.</p>
                </div>
              )}
            </div>
          );
        })
      ) : (
        <p>No hay Interpretes disponibles</p>
      )}
    </div>
  );
};

export default Interpretes;
