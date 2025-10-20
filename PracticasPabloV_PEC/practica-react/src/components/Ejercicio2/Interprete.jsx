import React from "react";
import "./Interprete.css";

const Interprete=  (props) => { 

    return(
        <>
            <div className="Interprete_css">
                <h1>{props.nombre}</h1> 
                <img className="Img"
                 src={props.src} alt={props.nombre}/>
                <p>{props.children}</p>
            </div>
        </>
    );
};
export default Interprete;