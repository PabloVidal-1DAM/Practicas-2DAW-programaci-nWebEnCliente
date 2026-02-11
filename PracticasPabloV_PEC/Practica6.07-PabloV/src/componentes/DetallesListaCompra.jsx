import React from "react";
import useContextListaCompra from "./hooks/useContextListaCompra";
import useAuth from "./hooks/useAuth";
import "./DetallesListaCompra.css";

const DetallesListaCompra = () => {
  const {
    listaSeleccionada,
    eliminarProductoLista,
    borrarTodaLaLista,
    navegar,
  } = useContextListaCompra();

  const { mensajeConfirmacion } = useAuth();

  const items = listaSeleccionada?.itemslista || [];
  const existeLista = !!listaSeleccionada; // true si existe, false si es null
  const hayItems = items.length > 0;

  const calcularPesoTotal = () => {
    if (!listaSeleccionada || !listaSeleccionada.itemslista) return 0;
    let totalPeso = 0;
    items.forEach((item) => {
      const peso = parseInt(item.productos.peso) || 0;
      const cantidad = item.cantidad || 0;

      totalPeso += peso * cantidad;
    });

    return totalPeso / 1000; // Se divide ente 1000 para pasarlo a kilos.
  };

  const calcularPrecioTotal = () => {
    let totalPrecio = 0;

    items.forEach((item) => {
      // Protección extra con ?.
      const precio = Number(item.productos?.precio) || 0;
      const cantidad = item.cantidad || 0;
      totalPrecio += precio * cantidad;
    });

    return totalPrecio;
  };

  const precioFinal = calcularPrecioTotal();
  const pesoFinal = calcularPesoTotal();
  const necesitaCoche = pesoFinal > 8; //El coche se necesita solo cuando es 8kg en adelante.

  return (
<>
      {/* CONDICIÓN 1: ¿Existe la lista? */}
      {!existeLista ? (
        <div className="mensaje-error">
          <p>⚠️ No hay ninguna lista seleccionada.</p>
          <button onClick={() => navegar("/listaCompra")}>
            Volver a mis listas
          </button>
        </div>
      ) : (
        /* SÍ EXISTE LA LISTA. CONDICIÓN 2: ¿Está vacía? */
        <>
          {!hayItems ? (
            <div className="listaVacía">
              <h2>La lista "{listaSeleccionada.nombre}" está vacía</h2>
              <p>Añade productos para empezar a verlos aquí.</p>
              <button onClick={() => navegar("/productos")}>Ir a Productos</button>
            </div>
          ) : (
            /* CONDICIÓN 3: TIENE DATOS -> MOSTRAR RESUMEN */
            <div>
              <h3>Resumen de la lista</h3>
              <p>Precio Total: <strong>{precioFinal.toFixed(2)} €</strong></p>
              <p>Peso Total: <strong>{pesoFinal.toFixed(2)} kg</strong></p>

              {necesitaCoche ? (
                  <p style={{color: 'red'}}>🚗 Coge el coche</p> 
              ) : (
                  <p style={{color: 'green'}}>🚶 Ve andando</p>
              )}
              
              {/* Aquí puedes pintar los items */}
              {items.map(item => (
                 <div key={item.id}>
                    {item.productos?.nombre} - {item.cantidad} uds.
                    <button onClick={() => eliminarProductoLista(item.id)}>X</button>
                 </div>
              ))}
            </div>
          )}
        </>
      )}
    </>
  );
};

export default DetallesListaCompra;
