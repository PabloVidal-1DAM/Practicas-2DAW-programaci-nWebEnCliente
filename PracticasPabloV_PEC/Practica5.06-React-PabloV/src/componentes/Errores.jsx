import React from 'react'

const Errores = ({errores}) => {
  return (
    <div>
      <h1>Errores: </h1>
      <div className={errores.length > 0 ? "errores" : "noErrores"}>
        {errores.length ? errores.map((valor,indice, array) =>{
            return(
                <h4 key={indice}>{valor}</h4>
            )
        }) : "No hay errores que mostrar"}
      </div>
    </div>
  )
}

export default Errores
