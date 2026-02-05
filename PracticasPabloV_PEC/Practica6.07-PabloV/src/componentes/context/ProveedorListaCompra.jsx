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
  const { setError, navegar } = useAuth();

  const [listaCompra, setListaCompra] = useState();

  const datosListaCompraIniciales = {
    nombre: "",
    usuario_id: "",
  };

  const [datosListaCompra, setDatosListaCompra] = useState(
    datosListaCompraIniciales,
  );

  const actualizarDatosListaCompra = (evento) => {
    const { name, value } = evento.target;
    setDatosListaCompra({ ...datosListaCompra, [name]: value });
  };

  const cargarListaCompras = async () => {
    try {
      const { data, error } = await conexionSupabase
        .from("listacompra")
        .select(
          "nombre, usuario_id, itemslista( productos (nombre, peso, precio, url, descripcion), cantidad )",
        );
      if (error) throw error;

      setListaCompra(data);
      console.log(data);
    } catch (error) {
      setError(
        "Ha ocurrido un error al intentar cargar las listas de la BD: " +
          error.message,
      );
    }
  };

  const guardarListaCompra = async (idProducto) => {
    const respuesta = await insertarDato("listacompra", datosListaCompra);

    if (respuesta) {
      const nuevaListaInsertada = await obtenerRegistro(
        "listacompra",
        respuesta.data[0].id,
      );

      if (nuevaListaInsertada && idProducto) {
        await insertarDato("itemslista", {
          lista_id: nuevaLista.id,
          producto_id: idProducto,
          cantidad: 1, // porqué 1?????
        });
      }
      setDatosListaCompra(datosListaCompraIniciales);
      await cargarListaCompras();
      setError("Lista de la compra insertada correctamente :) !!!.");
    }
  };

  useEffect(() => {
    cargarListaCompras();
  }, []);

  const datos = {
    listaCompra,
    datosListaCompra,

    setError,
    navegar,
    cargando,
    actualizarDatosListaCompra,

    guardarListaCompra,
  };
  return (
    <contextoListaCompra.Provider value={datos}>
      {children}
    </contextoListaCompra.Provider>
  );
};

export default ProveedorListaCompra;
export { contextoListaCompra };
