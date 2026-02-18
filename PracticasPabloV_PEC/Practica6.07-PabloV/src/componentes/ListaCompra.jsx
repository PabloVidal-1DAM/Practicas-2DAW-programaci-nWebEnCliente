import React from "react";
import useContextListaCompra from "./hooks/useContextListaCompra";
import useAuth from "./hooks/useAuth";

const ListaCompra = ({ lista }) => {
  const { setListaSeleccionada, navegar, borrarTodaLaLista } = useContextListaCompra();
  const { mensajeConfirmacion, esAdmin } = useAuth();

  const accionLista = () => {
    setListaSeleccionada(lista);
    navegar("/listaCompra/detalles");
  };

  const borrarLista = (e) => {
    e.stopPropagation();

    mensajeConfirmacion(
      `¿Seguro que quieres eliminar la lista "${lista.nombre}"?`,
      () => borrarTodaLaLista(lista.id),
    );
  };

  return (
    <div
      className="lista"
      id={lista.id}
      onClick={() => {
        accionLista();
      }}
    >
      {!esAdmin() && 
      <button className="btn-eliminar-lista" onClick={(evento) =>{borrarLista(evento)}}>
        🗑️
      </button>}
      <img src="https://i.pinimg.com/736x/82/d9/bb/82d9bb66f6d2231f2073b25c66f1a703.jpg" />
      <h3>{lista.nombre}</h3>
    </div>
  );
};

export default ListaCompra;
