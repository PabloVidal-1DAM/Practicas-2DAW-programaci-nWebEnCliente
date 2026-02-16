import React, { createContext, useEffect, useState } from "react";
import useSupabase from "../hooks/useSupabase";
import useAuth from "../hooks/useAuth";
import { conexionSupabase } from "../Estructura/supabase/supabase";

const contextoListaCompra = createContext();
const ProveedorListaCompra = ({ children }) => {
  const {
    obtenerTodo,
    obtenerRegistro,
    insertarDato,
    eliminarDato,
    editarDato,
    cargando,
  } = useSupabase();
  const { setError, usuario, navegar } = useAuth();

  const [listaCompra, setListaCompra] = useState([]);
  const [listaSeleccionada, setListaSeleccionada] = useState(null);

  const datosListaCompraIniciales = {
    nombre: "",
  };
  // Estado que controlará el formulario para añadir listas de la compra.
  const [datosListaCompra, setDatosListaCompra] = useState(
    datosListaCompraIniciales,
  );

  // Usa la función genérica de traer datos para hacer una consulta multitabla,
  // que trae la lista de la compra con sus productos dentro (si tiene).
  const cargarListaCompras = async () => {
    try {
      const listas = await obtenerTodo(
        "listacompra",
        `
          id, nombre, usuario_id, created_at,
          itemslista (
            id, cantidad,
            productos ( id, nombre, peso, precio, url )
          )
        `,
      );
      setListaCompra(listas);

      if (listaSeleccionada) {
        // Busca esa misma lista dentro de los datos NUEVOS que acaban de llegar de la base de datos.
        const listaActualizada = listas.find(
          (lista) => lista.id === listaSeleccionada.id,
        );

        // Si se encuentra, se actualiza lo que ve el usuario.
        // Así, si acaba de añadir un producto, aparecerá justo después.
        if (listaActualizada) {
          setListaSeleccionada(listaActualizada);
        }
      }
    } catch (error) {
      setError(
        "Ha ocurrido un error al intentar cargar las listas de la BD: " +
          error.message,
      );
    }
  };

  const actualizarDatosListaCompra = (evento) => {
    const { name, value } = evento.target;
    setDatosListaCompra({ ...datosListaCompra, [name]: value });
  };

  const guardarListaCompra = async () => {
    // Se crea un nuevo objeto que contiene todo lo anterior del estado de las listas de la compra, y el id de usuario
    // que ha creado en ese momento la lista, accediendo al estado del proveedor de sesion.
    try {
      const objetoParaGuardar = {
        ...datosListaCompra,
        usuario_id: usuario.id,
      };

      const respuesta = await insertarDato("listacompra", objetoParaGuardar);

      if (respuesta) {
        setDatosListaCompra(datosListaCompraIniciales);
        await cargarListaCompras();
        setError("Lista de la compra insertada correctamente :) !!!.");
      }
    } catch (error) {
      setError(
        `Error al intentar guardar la lista de la compra: ${error.message} .`,
      );
    }
  };

  const AnyadirProductoLista = async (idLista, idProducto, cantidad) => {
    // Con lo que se pasa a la función se crea un objeto JSON para pasarselo a la función genérica de insertar datos.
    try {
      const nuevoItem = {
        lista_id: idLista,
        producto_id: idProducto,
        cantidad: cantidad,
      };

      const respuesta = await insertarDato("itemslista", nuevoItem);
      if (respuesta) {
        await cargarListaCompras();
        setError("Producto insertado correctamente :) !!!.");
      }
    } catch (error) {
      setError(
        `Error al intentar añadir un producto a la lista de la compra: ${error.message} .`,
      );
    }
  };

  // Para eliminar existe la de eliminar un solo producto (por su id) y cargarse la lista entera.
  const eliminarProductoLista = async (idItemLista) => {
    try {
      const resultado = await eliminarDato("itemslista", idItemLista);

      if (resultado) {
        await cargarListaCompras();
        setError("Producto eliminado de la lista correctamente :) !!!.");
      }
    } catch (error) {
      setError(
        `Error al intentar eliminar un producto de la lista de la compra: ${error.message}`,
      );
    }
  };

  const borrarTodaLaLista = async (idLista) => {
    try {
      const resultado = await eliminarDato("listacompra", idLista);

      if (resultado) {
        setListaSeleccionada(null);
        await cargarListaCompras();
        setError("Lista borrada");
      }
    } catch (error) {
      setError(
        `Error al intentar borrar la lista de la Base de Datos: ${error.message}`,
      );
    }
  };

  useEffect(() => {
    if (usuario) {
      cargarListaCompras();
    } else {
      setListaCompra([]);
      setListaSeleccionada(null);
    }
  }, [usuario]);

  const datos = {
    listaCompra,
    listaSeleccionada,
    setListaSeleccionada,
    datosListaCompra,

    setError,
    navegar,
    cargando,
    actualizarDatosListaCompra,

    guardarListaCompra,
    eliminarProductoLista,
    borrarTodaLaLista,
    AnyadirProductoLista,
  };
  return (
    <contextoListaCompra.Provider value={datos}>
      {children}
    </contextoListaCompra.Provider>
  );
};

export default ProveedorListaCompra;
export { contextoListaCompra };
