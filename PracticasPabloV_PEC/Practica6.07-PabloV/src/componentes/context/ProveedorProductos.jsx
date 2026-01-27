import React, { createContext, useEffect, useState } from "react";
import { conexionSupabase } from "../Estructura/supabase/supabase";
import { useNavigate } from "react-router-dom";
import useSupabase from "../hooks/useSupabase";

const contextoProductos = createContext();

const ProveedorProductos = ({ children }) => {
  const { obtenerTodo, cargando } = useSupabase();

  const valorFiltroInicial = "";

  const [listaProductos, setListaProductos] = useState([]);
  const [valorFiltro, setValorFiltro] = useState(valorFiltroInicial);
  const [numProductos, setNumProductos] = useState(0);
  const [precioMedio, setPrecioMedio] = useState(0);

  const cargarProductos = async () => {
    const productos = await obtenerTodo("productos");
    setListaProductos(productos);
    sacarDatosExtra(productos);
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
