import React from "react";
import "./Pelicula.css";
import Contenedor from "../Ejercicio1/Contenedor";

const Pelicula = (props) =>{

    return(
        <>
            <div className="Pelicula_css">
                <h2>{props.titulo}</h2>
                <p className="estilo_p">Dirigida por: {props.direccion}</p>
                <p>cartela: {props.cartela}</p>
                <p>{props.children}</p>
            </div>
        </>
    );
};
export default Pelicula;