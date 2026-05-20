import React from 'react'
import Disco from "../discos/Disco"
import useContextCatalogo from "../hook/useContextCatalogo"

const Discos = () => {
  const {discos, cargando, errorGlobal} = useContextCatalogo();
  return (
    <div>
      {errorGlobal ? (
        <div style={{ color: 'red' }}>Existen Errores: {errorGlobal}</div>
      ):
      
      cargando ? (
        <div>Cargando discos...</div>
      ) : 

      discos.length === 0 ? (
        <h2>No existen Discos todavía.</h2>
      ): 
      (
      <>
        <h2>Catalogo de Discos</h2>
        {discos.map((disco) =>{
          return <Disco key={disco.id} disco={disco} />
        })}
      </>
      )}
    </div>
  );
}

export default Discos
