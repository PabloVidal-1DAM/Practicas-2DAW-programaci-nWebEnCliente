"use strict";
import {anyadirColores, cambiarColor, crearLienzo, pintar} from "./biblioteca.js";

window.onload = () =>{
    anyadirColores();
    crearLienzo();

    const selectorColor = document.getElementById("selectorColores");
    selectorColor.addEventListener("click",(evento) =>{
        if(evento.target.tagName ==="LI"){
            cambiarColor(evento.target);
        }
    }, false);

    const lienzo = document.getElementById("lienzo");
    lienzo.addEventListener("mousedown", (evento) =>{
        if (evento.target.tagName === "TD"){
            pintar(evento.target);
        }
    }, false);
}
