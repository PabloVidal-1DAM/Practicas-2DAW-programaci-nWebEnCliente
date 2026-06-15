import React, { useContext } from "react";
import {contextoCatalogo} from "../context/ProveedorCatalogo"

const useContextCatalogo = () =>{
  const contexto = useContext(contextoCatalogo);
  if(!contexto){
    throw new Error("El contexto useContextCatalogo debe usarse en el ProveedorCatalogo");
  }
  return contexto;
}

export default useContextCatalogo