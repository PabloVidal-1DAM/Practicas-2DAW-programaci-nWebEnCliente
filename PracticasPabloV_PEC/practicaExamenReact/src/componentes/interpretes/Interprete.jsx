import React from "react";
import useContextCatalogo from "../hook/useContextCatalogo";

const Interprete = ({ interprete }) => {

  const {discograficas, navegar, borrarItem} = useContextCatalogo();

  const discograficaEncontrada = discograficas.find((discografica) =>{
    return discografica.id === interprete.discograficaId;
  })

  return (
    <div>
      <h3>{interprete.nombre}</h3>
      <p>
        <strong>Genero:</strong>
        {interprete.genero}
      </p>

      <p>
        <strong>Discografia:</strong>
        {discograficaEncontrada ? discograficaEncontrada.nombre : "Desconocido"}
      </p>

      <button onClick={() =>{borrarItem(`/interpretes/${interprete.id}`)}}>Borrar</button>
    </div>
  );
};

export default Interprete;
