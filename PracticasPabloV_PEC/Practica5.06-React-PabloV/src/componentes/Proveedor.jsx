import React, { useState, createContext, useEffect } from "react";

const contextoDiscos = createContext();

const Proveedor = ({ children }) => {
  const [listaDiscos, setListaDiscos] = useState([]); // hasta que averigue de que rellenarlo.
  const [discosFiltrados, setDiscosFiltrados] = useState([]);
  const [discoBorrado, setDiscoBorrado] = useState([]);
  const [cargando, setCargando] = useState(false);

  // Aquí irán las peticiones a la API.

  const obtenerDiscos = async () => {
    try {
      setCargando(true);
      await new Promise(resolve => setTimeout(resolve, 5000)); // Fuerzo una espera para comprobar que el sistema de carga funciona.
      const respuesta = await fetch("http://localhost:5000/discos");
      if (!respuesta.ok) {
        throw new Error(
          `Error al traer los discos: ${respuesta.status} --> ${respuesta.statusText}`
        );
      }
      const datos = await respuesta.json();
      return datos;

    } catch (error) {
      throw error;
    }finally{
      setCargando(false);
    }
  };

  const cargarDiscos = async () =>{
    let discos = await obtenerDiscos();
    setListaDiscos(discos);
  }

  useEffect(()=>{
    cargarDiscos();
  }, [])

  const guardarDatos = async(datos) =>{
    const respuesta = await fetch("http://localhost:5000/discos", {method: "POST", body: JSON.stringify(datos)})
  }


  const datos = {
    listaDiscos,
    setListaDiscos,
    discosFiltrados,
    setDiscosFiltrados,
    discoBorrado,
    setDiscoBorrado,
    cargando,
    setCargando,
  };
  return (
    <>
      <contextoDiscos.Provider value={datos}>
        {children}
      </contextoDiscos.Provider>
    </>
  );
};

export default Proveedor;
export { contextoDiscos };
