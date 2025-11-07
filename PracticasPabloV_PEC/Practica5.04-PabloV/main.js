"use strict";
import {crearPiezas, crearPanelJuego} from "./biblioteca.js";

window.onload = () =>{
    crearPiezas();
    crearPanelJuego();

    const contenedorPanelJuego = document.getElementById("contendorPanelJuego");
    const contenedorPiezasPuzzle = document.getElementById("contenedorPiezasPuzzle");

    contenedorPiezasPuzzle.addEventListener("dragover", (evento) =>{
        evento.preventDefault();
    }, false)

    contenedorPiezasPuzzle.addEventListener("dragstart", (evento) =>{
        evento.dataTransfer.setData("id", evento.target.id);
        console.log(evento.target.id);
    }, false)

    contenedorPanelJuego.addEventListener("dragover", (evento) =>{
        evento.preventDefault();
    }, false)

    contenedorPanelJuego.addEventListener("dragstart", (evento) =>{
        console.log(evento);
    }, false)
}// fin del window onload.

