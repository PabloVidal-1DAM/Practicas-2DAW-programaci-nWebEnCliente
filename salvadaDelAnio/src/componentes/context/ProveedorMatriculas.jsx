import React, { createContext } from "react";

const contextoMatriculas = createContext();
const ProveedorMatriculas = ({children}) =>{
        const datos = {

    };
    return (
        <contextoMatriculas.Provider value={datos}>
            {children}
        </contextoMatriculas.Provider>
    );
}

export default ProveedorMatriculas;
export {contextoMatriculas};