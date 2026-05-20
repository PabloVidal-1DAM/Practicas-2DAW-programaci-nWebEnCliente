import React from 'react'
import useContextCatalogo from '../hook/useContextCatalogo'
import Discografia from './Discografia';

const Discografias = () => {
  const {discograficas, cargando, errorGlobal} = useContextCatalogo();
  return (
    <div>
      {errorGlobal ? 
      <div>Existen errores: {errorGlobal}</div> :

      cargando ? <div>Cargando...</div> :

      discograficas.length === 0 ? <div>No existen discograficas que cargar</div> :

      <>
        <h2>Catalogo de Discograficas</h2>
        {discograficas.map((discografica) =>{
          return <Discografia key={discografica.id} discografica={discografica} />
        })}
      </>
      }
    </div>
  )
}

export default Discografias
