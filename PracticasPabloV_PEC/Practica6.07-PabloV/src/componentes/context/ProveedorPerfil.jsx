import React, { createContext } from 'react'

const contextoPerfiles = createContext();
const ProveedorPerfil = ({children}) => {

    

const datos = {};
  return (
    <contextoPerfiles.Provider value={datos}>
        {children}
    </contextoPerfiles.Provider>
  );
}

export default ProveedorPerfil;
export{contextoPerfiles};

