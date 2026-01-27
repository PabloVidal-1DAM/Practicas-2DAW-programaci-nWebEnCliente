import React, { createContext, useEffect, useState } from "react";
import useSupabase from "../hooks/useSupabase";

const contextoProductos = createContext();

const ProveedorProductos = ({ children }) => {
  const { obtenerTodo, cargando } = useSupabase();

  const valorFiltroInicial = "";

  const [listaProductos, setListaProductos] = useState([]);
  const {listaFiltrada, setListaFiltrada} = useState([]);
  const [valorFiltro, setValorFiltro] = useState(valorFiltroInicial);
  const [numProductos, setNumProductos] = useState(0);
  const [precioMedio, setPrecioMedio] = useState(0);

  const cargarProductos = async () => {
    const productos = await obtenerTodo("productos");
    setListaProductos(productos);
    sacarDatosExtra(productos);

    setListaFiltrada(productos);
  };

const sacarDatosExtra = (productos) => {
  const cantidad = productos.length;
  setNumProductos(cantidad);

  if (cantidad > 0) {
    // 1. Declaramos la variable FUERA del bucle para que acumule
    let sumaTotal = 0; 

    for (let i = 0; i < cantidad; i++) {
      let precioActual = Number(productos[i].precio);
      // 2. Sumamos al acumulador
      sumaTotal = sumaTotal + precioActual; 
    }

    // 3. Usamos la variable que ya tiene la suma de todos
    const resultadoMedia = sumaTotal / cantidad;
    setPrecioMedio(resultadoMedia.toFixed(2));
  } else {
    setPrecioMedio(0);
  }
};

const filtrarPorNombre = (nombre) =>{
  const nuevaLista = listaProductos.filter((producto) =>{
      return nombre === producto.nombre;
  });
  setListaFiltrada(nuevaLista);
}



  useEffect(() => {
    cargarProductos();
  }, []);

  const datos = {
    listaProductos,
    valorFiltro,
    setValorFiltro,
    numProductos,
    precioMedio,
    cargando
};
  return (
    <contextoProductos.Provider value={datos}>{children}</contextoProductos.Provider>
  );
};

export default ProveedorProductos;
export { contextoProductos };
