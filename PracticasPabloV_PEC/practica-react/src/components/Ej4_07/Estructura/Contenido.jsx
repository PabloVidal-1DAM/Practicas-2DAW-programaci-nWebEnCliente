import React from 'react'

const Contenido = (props) => {
  return (
    <div>
      {/*Lo que contendrá será el contenido propenso a redibujarse y cambiar. */}
      {props.children}
    </div>
  )
}

export default Contenido
