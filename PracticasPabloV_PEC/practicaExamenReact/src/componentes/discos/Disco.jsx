import React from 'react'
import useContextCatalogo from '../hook/useContextCatalogo'

const Disco = ({disco}) => {

  const {interpretes,navegar, borrarItem} = useContextCatalogo();

  const interpreteEncontrado = interpretes.find((interprete) =>{
    return interprete.id === disco.interpreteId;
  });

  return (
    <div id={disco.id}>
      <h3>{disco.titulo}</h3>
      <p><strong>Año:</strong>{disco.anyo}</p>

      <p><strong>Artista:</strong>{ interpreteEncontrado ? interpreteEncontrado.nombre : 'Desconocido'}</p>

      <button onClick={() =>{borrarItem(`/discos/${disco.id}`);}}>Borrar</button>
    </div>
  )
}

export default Disco
