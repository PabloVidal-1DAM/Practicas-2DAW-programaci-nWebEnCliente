import React, { createContext } from "react";

const contextoPracticas = createContext();
const ProveedorPracticas = ({children}) =>{
        const datos = {

    };
    return (
        <contextoPracticas.Provider value={datos}>
            {children}
        </contextoPracticas.Provider>
    );
}

export default ProveedorPracticas;
export {contextoPracticas};