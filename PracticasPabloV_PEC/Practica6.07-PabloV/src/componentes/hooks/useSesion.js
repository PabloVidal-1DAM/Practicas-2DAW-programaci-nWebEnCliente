import React, { useContext, useState } from 'react'
import {contextoSesion} from "../context/ProveedorSesion.jsx";

export const useSesion = () => {

  const contexto = useContext(contextoSesion);

  if (!contexto){
    throw new Error("El hook useSesion debe usarse en ProveedorSesion.")
  }

  return contexto;
}

export default useSesion;
