import React from 'react'
import useContextCatalogo from '../hook/useContextCatalogo'
import Interprete from "../interpretes/Interprete"

const Interpretes = () => {
  const {interpretes, cargando,errorGlobal} = useContextCatalogo();
  return (
    <div>
      {errorGlobal ? 
      <div>existen errores: {errorGlobal}</div> : 

      cargando ? <div>cargando interpretes...</div> :

      interpretes.length === 0 ? 
      <div>No existen interpretes</div>:

      <>
        <h2>Catalogo de Interpretes</h2>
        {interpretes.map((interprete) =>{
          return <Interprete key={interprete.id} interprete={interprete} />
        })}
      </>
      }
    </div>
  )
}

export default Interpretes
