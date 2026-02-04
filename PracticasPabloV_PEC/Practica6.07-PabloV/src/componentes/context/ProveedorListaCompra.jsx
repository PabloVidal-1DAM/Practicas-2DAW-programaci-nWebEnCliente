import React, { createContext, useEffect, useState } from "react";
import useSupabase from "../hooks/useSupabase";
import useAuth from "../hooks/useAuth";

const contextoListaCompra = createContext();
const ProveedorListaCompra = ({ children }) => {

  const { obtenerTodo, insertarDato, eliminarDato, editarDato, cargando } = useSupabase();
  const { setError, navegar } = useAuth();

  const [listaCompra, setListaCompra] = useState();

  const datosListaCompraIniciales = {
    nombre: "",
    usuario_id: ""
  };

  const [datosListaCompra, setDatosListaCompra] = useState(datosListaCompraIniciales);

  const actualizarDatosListaCompra = (evento) =>{
    const {name, value} = evento.target;
    setDatosListaCompra({...datosListaCompra, [name]: value});
  }

  const cargarListaCompras = async() =>{
    const listaCompras = await obtenerTodo("listacompra");
    setListaCompra(listaCompras);
  }

  const guardarListaCompra = async() =>{
    const respuesta = await insertarDato("listacompra", datosListaCompra);

    if(respuesta){
        setDatosListaCompra(datosListaCompraIniciales);
        await cargarListaCompras();
        setError("Lista de la compra insertada correctamente :) !!!.")
    }
  }

  useEffect(() =>{
    cargarListaCompras();
  }, [])


  const datos = {
    listaCompra,
    datosListaCompra,

    setError,
    navegar,
    cargando,
    actualizarDatosListaCompra,

    guardarListaCompra
  };
  return (
    <contextoListaCompra.Provider value={datos}>
      {children}
    </contextoListaCompra.Provider>
  );
};

export default ProveedorListaCompra;
export { contextoListaCompra };
