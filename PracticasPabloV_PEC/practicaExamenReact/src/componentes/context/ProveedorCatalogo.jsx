import React, { createContext, useEffect, useState } from "react";
import useAPI from "../hook/useAPI"
import { useNavigate } from "react-router-dom";

const contextoCatalogo = createContext();
const ProveedorCatalogo = ({children}) =>{

  const {borrarDatos, cargando, enviarDatos, errorGlobal, modificarDatos, obtenerDatos} = useAPI();

  const [interpretes, setInterpretes] = useState([]);
  const [discograficas, setDiscograficas] = useState([]);
  const [discos, setDiscos] = useState([]);

  const navegar = useNavigate();

  const cargarTodo = async() =>{
    try{
    const [datosInterpretes, datosDiscografias, datosDiscos] = await Promise.all([
      obtenerDatos(`http://localhost:3000/interpretes`),
      obtenerDatos(`http://localhost:3000/discograficas`),
      obtenerDatos(`http://localhost:3000/discos`)
    ]);

    setInterpretes(datosInterpretes);
    setDiscograficas(datosDiscografias);
    setDiscos(datosDiscos);
  }catch(error){
    console.log("error al obtener todo", error);
  }
  }

  useEffect(() =>{
    cargarTodo();
  }, [])

  const anyadirItem = async(endpoint, cuerpo) =>{
    try{
      await enviarDatos(`http://localhost:3000/${endpoint}`, cuerpo);
      cargarTodo();
    }catch(error){
      console.log("error al anyadir item:", error);
    }
  }

  const borrarItem = async(endpoint) =>{
    try{
      await borrarDatos(`http://localhost:3000/${endpoint}`);
      cargarTodo();
    }catch(error){
      console.log("error al borrar el item: ", error);
    }
  }

  const modificarItem = async(endpoint, cuerpo) =>{
    try{
      await modificarDatos(`http://localhost:3000/${endpoint}`, cuerpo);
      cargarTodo();
    }catch(error){
      console.log("error al modificar item")
    }
  }

  const datos = {
    interpretes,
    discograficas,
    discos,

    cargando,
    navegar,
    errorGlobal,

    anyadirItem,
    borrarItem,
    modificarItem
  };
  return (
    <contextoCatalogo.Provider value={datos}>
      {children}
    </contextoCatalogo.Provider>
  );
}
export default ProveedorCatalogo;
export {contextoCatalogo};