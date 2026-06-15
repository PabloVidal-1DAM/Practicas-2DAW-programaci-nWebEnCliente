import React from "react";
import useContextDiscentes from "../hooks/useContextDiscentes";
 const Error = () =>{
    const {errores} = useContextDiscentes();
    return (
    <>
        <h2 style={{color: "red"}}>Existen errores: {errores}</h2>
    </>
    );
 }

 export default Error;