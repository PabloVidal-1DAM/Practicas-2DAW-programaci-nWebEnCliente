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
    }, false)

    contenedorPiezasPuzzle.addEventListener("drop", (evento) =>{
        if (evento.target.classList.contains("zonaSoltar")){
            const elementoSeleccionado = document.getElementById(evento.dataTransfer.getData("id"));
            evento.target.appendChild(elementoSeleccionado);
        }
    }, false)

    contenedorPanelJuego.addEventListener("dragover", (evento) =>{
        evento.preventDefault();
    }, false)

    contenedorPanelJuego.addEventListener("dragstart", (evento) =>{
        evento.dataTransfer.setData("id", evento.target.id);
    }, false)

    contenedorPanelJuego.addEventListener("drop", (evento) =>{
        if (evento.target.classList.contains("zonaSoltar") && !evento.target.hasChildNodes()){
            const elementoSeleccionado = document.getElementById(evento.dataTransfer.getData("id"))
            evento.target.appendChild(elementoSeleccionado);
        }
    }, false)

    // Uso de eventos de drag SOLO para aplicar estilos visuales con clases CSS:

    // TODO:

}// fin del window onload.

