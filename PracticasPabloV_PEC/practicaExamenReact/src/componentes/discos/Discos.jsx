import React from "react";
import useContextCatalogo from "../hook/useContextCatalogo";
import Disco from "../discos/Disco";

const Discos = () =>{
  const {discos, errorGlobal, cargando} = useContextCatalogo();
  return (
  <>
    {errorGlobal ? <div style={{color: "red"}}>Existen errores:{errorGlobal}</div> : 

    cargando ? <div>Cargando componente...</div> :

    discos.length === 0 ? <div>No hay discos que mostrar</div> :

    <div>
      <h2>Catalogo de discos</h2>
      {discos.map((disco) =>{
        return <Disco key={disco.id} disco={disco}/>
      })}
    </div>
    }
  </>
  );
};

export default Discos;
