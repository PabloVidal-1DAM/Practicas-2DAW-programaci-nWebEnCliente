import React, { createContext } from "react";

const contextoDocentes = createContext();
const ProveedorDocentes = ({children}) =>{
        const datos = {

    };
    return (
        <contextoDocentes.Provider value={datos}>
            {children}
        </contextoDocentes.Provider>
    );
}
export default ProveedorDocentes;
export {contextoDocentes};