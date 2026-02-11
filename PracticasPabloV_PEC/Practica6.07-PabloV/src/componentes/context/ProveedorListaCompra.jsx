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

  const [datosListaCompra, setDatosListaCompra] = useState(
    datosListaCompraIniciales,
  );

  const cargarListaCompras = async () => {
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
    console.log(listas);

    if (listaSeleccionada) {
      // ... buscamos esa misma lista dentro de los datos NUEVOS que acaban de llegar
      const listaActualizada = listas.find(
        (lista) => lista.id === listaSeleccionada.id,
      );

      // Si la encontramos, actualizamos lo que ve el usuario.
      // Así, si acaba de añadir un producto, aparecerá justo después.
      if (listaActualizada) {
        setListaSeleccionada(listaActualizada);
      }
    }
  };

  const actualizarDatosListaCompra = (evento) => {
    const { name, value } = evento.target;
    setDatosListaCompra({ ...datosListaCompra, [name]: value });
  };

  const guardarListaCompra = async () => {
    if (!usuario) {
      setError("Debes de iniciar sesión para guardar una lista de la compra.");
      return;
    }

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
  };

  const AnyadirProductoLista = async (idLista, idProducto, cantidad) => {
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
  };

  const eliminarProductoLista = async (idItemLista) => {
    const resultado = await eliminarDato("itemslista", idItemLista);

    if (resultado) {
      await cargarListaCompras();
      setError("Producto eliminado de la lista correctamente :) !!!.");
    }
  };

  const borrarTodaLaLista = async (idLista) => {
    const resultado = await eliminarDato("listacompra", idLista);

    if (resultado) {
      setListaSeleccionada(null);
      await cargarListaCompras();
      setError("Lista borrada");
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
