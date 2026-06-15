import React from "react";
import useContextCatalogo from "../hook/useContextCatalogo";

const Disco = ({disco}) =>{
  const {interpretes, borrarItem, modificarItem, navegar } = useContextCatalogo();

  const interpreteEncontrado = interpretes.find((interprete) =>{
    return interprete.id === disco.interpreteId
  })

  return (
  <>
    <h3>{disco.titulo}</h3>

    <p><strong>Año: </strong>{disco.anyo}</p>

    <p><strong>Interprete:</strong>{disco.interpreteId ? interpreteEncontrado.nombre : "Desconocido"}</p>

    <button style={{marginTop: "5px"}} onClick={() =>{borrarItem(`discos/${disco.id}`)}}>Borrar Elemento</button>
    
    <button style={{marginLeft: "20px"}} onClick={() =>{navegar(`/discos/${disco.id}`)}}>Modificar Elemento</button>
  </>
  );
}

export default Disco;
