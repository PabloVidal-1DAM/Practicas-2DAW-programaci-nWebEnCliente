import React, { useContext, useState } from 'react'
import {contextoSesion} from "../context/ProveedorSesion.jsx";

export const useSesion = () => {
 {/* Hook que bebe del contexto de ProveedorSesion para así hacer que los componentes beban de este en vez del propio proveedor */}
  const contexto = useContext(contextoSesion);

  if (!contexto){
    throw new Error("El hook useSesion debe usarse en ProveedorSesion.")
  }

  return contexto;
}

export default useSesion;
