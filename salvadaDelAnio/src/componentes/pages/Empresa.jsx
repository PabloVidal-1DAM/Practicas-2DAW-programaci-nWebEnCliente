import React from "react";
import {useNavigate} from "react-router-dom";

const Trabajador = ({trabajador}) =>{
    const navegar = useNavigate();
    return(
        <div onClick={() =>{
            navegar(`/empresa/${trabajador.id}`)
        }}>{trabajador.nombre}</div>
    );
}

export default Trabajador;