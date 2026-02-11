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

  const items = listaSeleccionada.itemslista;
  const existeLista = !!listaSeleccionada; // true si existe, false si es null
  const hayItems = items.length > 0;

  const calcularPesoTotal = () => {
    let totalPeso = 0;
    items.forEach((item) => {
      const peso = parseInt(item.productos.peso);
      const cantidad = item.cantidad;

      totalPeso += peso * cantidad;
    });

    return totalPeso / 1000; // Se divide ente 1000 para pasarlo a kilos.
  };

  const calcularPrecioTotal = () => {
    let totalPrecio = 0;

    items.forEach((item) => {
      // Protección extra con ?.
      const precio = Number(item.productos.precio);
      const cantidad = item.cantidad;
      totalPrecio += precio * cantidad;
    });

    return totalPrecio;
  };

  const precioFinal = calcularPrecioTotal();
  const pesoFinal = calcularPesoTotal();
  const necesitaCoche = pesoFinal > 8; //El coche se necesita solo cuando es 8kg en adelante.

  return (
    <div className="contenedor-principal">
      {/* Si el usuario recarga la página y deja de seleccionarse la lista, se muestra solo este div pequeño para volver atrás. */}
      {!existeLista ? (
        <div className="mensaje-error">
          <p>⚠️ No hay ninguna lista seleccionada.</p>
          <button onClick={() => navegar("/listaCompra")}>
            Volver a mis listas
          </button>
        </div>
      ) : (
        /* Si existe, pero no tiene productos añadidos, se le dice al usuario de ir a el componente "<Productos>" a añadirlos.*/
        <>
          {!hayItems ? (
            <div className="listaVacía">
              <h2>La lista "{listaSeleccionada.nombre}" está vacía</h2>
              <p>Añade productos para empezar a verlos aquí.</p>
              <button onClick={() => navegar("/productos")}>
                Ir a Productos
              </button>
            </div>
          ) : (
            /* Aquí es ya cuando ya tiene chicha que mostrar */
            <div className="detalle-contenido">
              <h3 className="titulo-seccion">Resumen de la lista</h3>

              <div className="resumen-dashboard">
                <div className="card-dato">
                  <span className="label">Precio Total</span>
                  <strong className="dato">{precioFinal.toFixed(2)} €</strong>
                </div>

                <div className="card-dato">
                  <span className="label">Peso Total</span>
                  <strong className="dato">{pesoFinal.toFixed(2)} kg</strong>
                  <div
                    className={`badge-transporte ${necesitaCoche ? "bg-rojo" : "bg-verde"}`}
                  >
                    {necesitaCoche ? "🚗 Coge el coche" : "🚶 Ve andando"}
                  </div>
                </div>
              </div>

              {/* Se recorren los objetos que contiene esa lista, con la opción de borrarlos si lo desea el usuario. */}
              <div className="lista-items-grid">
                {items.map((item) => (
                  <div key={item.id} className="item-fila">
                    <div className="info-producto">
                      <span className="nombre-producto">
                        {item.productos?.nombre}
                      </span>
                      <span className="badge-cantidad">
                        {item.cantidad} uds.
                      </span>
                    </div>
                    <button
                      className="btn-borrar-item"
                      onClick={() => {
                        mensajeConfirmacion(
                          `¿Deseas borrar "${item.productos.nombre}" ?`,
                          () => {
                            eliminarProductoLista(item.id);
                          },
                        );
                      }}
                    >
                      🗑️
                    </button>
                  </div>
                ))}
              </div>
              <div className="zona-anadir-mas">
                <h3>O si lo deseas, puedes añadir más productos.</h3>
                <button
                  className="btn-seguir-comprando"
                  onClick={() => navegar("/productos")}
                >
                  Pulsa Aquí
                </button>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default DetallesListaCompra;
