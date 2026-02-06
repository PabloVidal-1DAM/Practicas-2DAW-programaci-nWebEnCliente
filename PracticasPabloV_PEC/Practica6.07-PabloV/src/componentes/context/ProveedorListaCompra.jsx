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

  const AnyadirProductoLista = async (idLista, idProducto) => {
    const nuevoItem = {
      lista_id: idLista,
      producto_id: idProducto,
      cantidad: 1,
    };

    const respuesta = await insertarDato("listacompra", nuevoItem);
    if (respuesta) {
      await cargarListaCompras();
      setError("Producto insertado correctamente :) !!!.");
    }
  };

  const eliminarProductoLista = async (idProducto) => {
    const resultado = await eliminarDato("listacompra", idProducto);

    if (resultado) {
      await cargarListaCompras();
      const listaActualizada = listaCompra.find((l) => l.id === listaId);
      if (listaActualizada) setListaSeleccionada(listaActualizada);
      setError("Producto eliminado de la lista correctamente :) !!!.");
    }
  };

  useEffect(() => {
    if(usuario){
      cargarListaCompras();
    }else{
      console.log("se ha ido el usuario");
      setListaCompra([]);
      setListaSeleccionada(null);
    }

    return () =>{
      setListaCompra([]);
      setListaSeleccionada(null);
    }
    
  }, [usuario]);

  const datos = {
    listaCompra,
    listaSeleccionada,
    datosListaCompra,

    setError,
    navegar,
    cargando,
    actualizarDatosListaCompra,

    guardarListaCompra,
    eliminarProductoLista,
    AnyadirProductoLista
  };
  return (
    <contextoListaCompra.Provider value={datos}>
      {children}
    </contextoListaCompra.Provider>
  );
};

export default ProveedorListaCompra;
export { contextoListaCompra };
