import React from "react";
import "./Interprete.css";

const Interprete=  (props) => { 

    return(
        <>
            <div className="Interprete_css">
                <h1>{props.nombre}</h1> {/*Uso de props para usar los atributos que se pasan desde app*/}
                <img className="Img"
                 src={props.src} alt={props.nombre}/>
                <p>{props.children}</p>
            </div>
        </>
    );
};
export default Interprete;