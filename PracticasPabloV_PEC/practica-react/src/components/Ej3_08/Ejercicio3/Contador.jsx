import React from 'react'

const Contador = (props) => {

  const dato = props.dato;

  return (
    <div className="elementosContador">
      <p>{dato}</p>
    </div>
  )
}

export default Contador
