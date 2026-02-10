import React from "react";
import useContextListaCompra from "./hooks/useContextListaCompra";

const ListaCompra = ({ lista }) => {
  const {setListaSeleccionada, navegar} = useContextListaCompra();

  const accionLista = () =>{
    setListaSeleccionada(lista);
    navegar("/listaCompra/detalles");
  }

  return (
    <div className="lista" id={lista.id} onClick={() =>{accionLista();}}>
      <img src="https://i.pinimg.com/736x/82/d9/bb/82d9bb66f6d2231f2073b25c66f1a703.jpg" />
      <h3>{lista.nombre}</h3>
    </div>
  );
};

export default ListaCompra;
