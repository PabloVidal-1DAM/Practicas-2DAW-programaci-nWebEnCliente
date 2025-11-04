"use strict";
import {anyadirColores, cambiarColor, crearLienzo, pintar, crearBtnBorrar, borrarTodo} from "./biblioteca.js";

window.onload = () =>{
    anyadirColores();
    crearLienzo();
    crearBtnBorrar();

    const selectorColor = document.getElementById("selectorColores");
    selectorColor.addEventListener("click",(evento) =>{
        if(evento.target.tagName ==="BUTTON"){
            cambiarColor(evento.target);
        }
    }, false);

    const lienzo = document.getElementById("lienzo");
    let pintando = false;
    lienzo.addEventListener("mousedown", (evento) =>{
        pintando = true;
        if (evento.target.tagName === "TD"){
            pintar(evento.target);
        }
    }, false);

    lienzo.addEventListener("mousemove", (evento) =>{
        if (pintando === true && evento.target.tagName ==="TD"){
            pintar(evento.target);
        }
    }, false)


    lienzo.addEventListener("mouseup", (evento) =>{
        pintando = false;
    }, false);

    lienzo.addEventListener("click", (evento) =>{
        if (evento.target.tagName === "BUTTON"){
            let celdas = document.getElementsByTagName("td");
            borrarTodo(celdas);
        }
    }, false)
}
