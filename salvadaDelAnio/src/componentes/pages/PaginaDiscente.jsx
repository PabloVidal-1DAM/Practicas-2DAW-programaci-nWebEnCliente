import React from "react";
import useContextDiscentes from "../hooks/useContextDiscentes"

const PaginaDiscente = () =>{
    const {discentes} = useContextDiscentes();
    console.log(discentes);
 return (
 <>
 </>
);
}

export default PaginaDiscente;