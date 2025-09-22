import React from "react";
import "./Contenedor.css";

const Contenedor= (props) => {
    //Codigo en Javascript

    return (
        <>
        <div className="contenedor_css">
            {props.children}
        </div>
        </>
    );
};
export default Contenedor;