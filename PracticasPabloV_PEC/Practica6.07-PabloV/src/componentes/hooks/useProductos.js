import {React, useContext} from "react";
import { contextoProductos } from "../context/ProveedorProductos";

const useProductos = () => {
  // Todos los componentes que necesiten acceder al contexto de Productos para usar algo usarán este hook.
  const contexto = useContext(contextoProductos);

    if(!contexto){
        throw new Error("El hook useProductos debe ser usado en ProveedorProductos");
    }

  return contexto;
};

export default useProductos;
