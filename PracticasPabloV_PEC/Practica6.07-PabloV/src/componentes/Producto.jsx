import {React, useState} from "react";
import useProductos from "./hooks/useProductos";
import useAuth from "./hooks/useAuth";
import useContextListaCompra from "./hooks/useContextListaCompra";

const Producto = ({ producto }) => {
  const { eliminarProducto, cargarDatosFormulario_editar } = useProductos();
  const { idioma, setIdioma, sesionIniciada, mensajeConfirmacion } = useAuth();
  const { listaSeleccionada, AnyadirProductoLista} = useContextListaCompra();

  const [cantidad, setCantidad] = useState(1); // El estado debe ser local para que al cambiar la cantidad de un producto no se cambien los demás.

  return (
    <div key={producto.id} className="producto-card">
      <div className="producto-imagen">
        <img src={producto.url} alt={producto.nombre} />
      </div>

      <div className="producto-info">
        <h3>{producto.nombre}</h3>
        <p className="descripcion">{producto.descripcion}</p>

        <div className="detalles-tecnicos">
          <span>
            <strong>Peso: {producto.peso}g</strong>
          </span>
          {/*Se usa un estado que almacena el idioma (por defecto es es-ES) para formatear el precio al español y que aparezca con comas.*/}
          <span className="precio">
            {producto.precio.toLocaleString(idioma, {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}
            €
          </span>
        </div>
      </div>
      {/*Para borrar  y editar únicamente pordrá verlo el usuario que tenga sesión iniciada*/}
      {sesionIniciada && (
        <div className="acciones">
          <button
            className="btn-editar"
            onClick={() => {
              cargarDatosFormulario_editar(producto);
            }}
          >
            <span>✏️</span> Editar
          </button>
          <button
            className="btn-eliminar"
            onClick={() => {
              mensajeConfirmacion(
                `¿Deseas borrar el producto ${producto.nombre} ?`,
                () => eliminarProducto(producto.id)
              );
            }}
          >
            <span>🗑️</span> Eliminar
          </button>
          {/*Si el usuario ha seleccionado una lista para añadir productos, se añaden nuevas cosas a cada carta del producto.*/}
          {/*Como la cantidad a añadir y un botón para añadir el producto a la lista seleccionada.*/}
          {listaSeleccionada && (
            <>
              <label htmlFor="cantidad" className="label_cantidad">Cantidad: </label>
              <input type="number" id="cantidad" name="cantidad" min="1" value={cantidad} onChange={(e) =>{ setCantidad(parseInt(e.target.value))}} />
              <button
                className="boton-añadir"
                onClick={() => {
                  mensajeConfirmacion(
                    `¿Deseas añadir ${cantidad} "${producto.nombre}" a la lista "${listaSeleccionada.nombre}" ?`,
                    () => AnyadirProductoLista(listaSeleccionada.id, producto.id, cantidad), 
                  );
                }}
              >
                Añadir
              </button>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default Producto;
