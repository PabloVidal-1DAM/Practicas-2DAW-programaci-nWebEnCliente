"use strict";
import {traerDatos, insertarPeliculas, mostrarDetalle} from "./biblioteca.js";
window.onload = ()=>{
    const url = "https://swapi.info/api/films";
    const aside = document.getElementById("app");
    const contenedor = document.getElementById("detalles");

    aside.addEventListener("click", (evento) =>{
        if (evento.target.tagName === "LI"){
            mostrarDetalle("https://swapi.info/api/films",evento.target.id, contenedor);
        }
    }, false);

    insertarPeliculas( url, aside)
}