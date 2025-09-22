import React from "react";
import "./Pelicula.css";

const Pelicula = (props) =>{

    return(
        <>
            <h2>{props.titulo}</h2>
            <p>Dirigida por: {props.direccion}</p>
        </>
    );
};export default Pelicula;