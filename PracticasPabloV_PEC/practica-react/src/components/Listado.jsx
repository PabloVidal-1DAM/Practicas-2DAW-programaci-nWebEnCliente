import React, {useState} from 'react'
import "./Listado.css"

const Listado = () => {
    
    let [listado, setListado] =useState();

    const anyadirNumero = () =>{
        let numeroRandom = Math.floor(Math.random(0 * 100) +1);
        setListado(...listado, numeroRandom);
    }

  return (
    <>
     <div className="Listado_css">
        <h1>Listado</h1>
        <button onClick={() =>{
            anyadirNumero();
        }}>Generar</button>
        <button>Eliminar</button>
     </div>
    </>
  )
}

export default Listado
