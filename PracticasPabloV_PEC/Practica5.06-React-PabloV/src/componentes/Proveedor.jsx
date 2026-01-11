import React, { useState, createContext } from 'react'

const contextoDiscos = createContext();

const Proveedor = ({children}) => {
    const [listaDiscos, setListaDiscos] = useState([]); // hasta que averigue de que rellenarlo.
      const [discosFiltrados, setDiscosFiltrados] = useState([]);
      const [discoBorrado, setDiscoBorrado] = useState([]);

    // Aquí irán las peticiones a la API.




    const datos = {
      listaDiscos,
      setListaDiscos,
      discosFiltrados,
      setDiscosFiltrados,
      discoBorrado,
      setDiscoBorrado
    }
  return (
    <>
      <contextoDiscos.Provider value={datos}>
        {children}
      </contextoDiscos.Provider>
    </>
  )
}

export default Proveedor;
export {contextoDiscos};
