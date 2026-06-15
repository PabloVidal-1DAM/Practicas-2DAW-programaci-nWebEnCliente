import React, { createContext } from "react";

const contextoModulos = createContext();
const ProveedorModulos = ({children}) =>{
        const datos = {

    };
    return (
        <contextoModulos.Provider value={datos}>
            {children}
        </contextoModulos.Provider>
    );
}

export default ProveedorModulos;
export {contextoModulos};