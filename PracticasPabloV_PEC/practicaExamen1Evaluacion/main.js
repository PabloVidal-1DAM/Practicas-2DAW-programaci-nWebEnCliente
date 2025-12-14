"use strict";
window.onload = () =>{
    const contenedorErrores = document.getElementById("contenedorErrores");
    const formulario = document.getElementById("formularioPersonaje")

    formulario.addEventListener("click", (evento) =>{
        if(evento.target.id === "btnEnviar"){
            evento.preventDefault();
        }
    }, false)

    
}