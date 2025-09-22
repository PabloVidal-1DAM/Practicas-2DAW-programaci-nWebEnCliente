import React from "react";
import "./Pelicula.css";
import Contenedor from "../Ejercicio1/Contenedor";

const Pelicula = (props) =>{

    return(
        <>
            <h2>{props.titulo}</h2>
            <p>Dirigida por: {props.direccion}</p>
            <p>cartela: {props.cartela}</p>
            <p>{props.children}</p>
            <Contenedor></Contenedor>
        </>
    );
};
export default Pelicula;