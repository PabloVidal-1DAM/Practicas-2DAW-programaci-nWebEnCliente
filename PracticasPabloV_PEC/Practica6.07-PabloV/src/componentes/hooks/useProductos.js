import React from "react";
import { contextoProductos } from "../context/ProveedorProductos";

const useProductos = () => {
  const contexto = contextoProductos;

    if(!contexto){
        throw new Error("El hook useAccionesBD debe ser usado en ProveedorAccionesBD");
    }

  return contexto;
};

export default useProductos;
