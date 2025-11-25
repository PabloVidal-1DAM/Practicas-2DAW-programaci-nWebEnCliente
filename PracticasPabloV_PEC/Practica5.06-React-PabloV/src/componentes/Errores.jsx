import React from 'react'

// Componente usado para mostrar los errores de los campos del formulario que estén mal o no hayan pasado la validación.
const Errores = ({errores}) => {
  return (
    <div>
      <h1>Errores: </h1>
      <div className="errores">
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
