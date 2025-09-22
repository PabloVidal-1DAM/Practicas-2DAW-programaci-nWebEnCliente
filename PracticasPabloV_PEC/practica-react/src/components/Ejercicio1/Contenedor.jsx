import React from "react";
import "./Contenedor.css";

const Contenedor= (props) => {
    //Codigo en Javascript

    return (
        <>
        <div className="contenedor_css">
            {props.children} {/*Para que se puedan localizar a los elementos aninados en App dentro de contenedor, 
            se pasa children a contenedor para que los muestre*/}
        </div>
        </>
    );
};
export default Contenedor;