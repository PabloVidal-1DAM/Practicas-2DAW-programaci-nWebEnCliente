import React from "react";
import "./Pelicula.css";

const Pelicula = (props) =>{

    return(
        <>
            <div className="Pelicula_css">
                <h2>{props.titulo}</h2> {/*Uso de props para acceder a los atributos y children puestos en app*/}
                <p className="estilo_p">Dirigida por: {props.direccion}</p>
                <img className="Img"
                 src={props.cartela} alt={props.titulo}/>
                <p>{props.children}</p>
            </div>
        </>
    );
};
export default Pelicula;