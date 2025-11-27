"use strict";
import {traerDatos, insertarPeliculas, mostrarDetalle} from "./biblioteca.js";
window.onload = ()=>{
    const url = "https://swapi.info/api/films";
    const aside = document.getElementById("app");
    const contenedor = document.getElementById("detalles");

    insertarPeliculas( url, aside);

    aside.addEventListener("click", (evento) =>{
        if (evento.target.tagName === "LI"){
            mostrarDetalle(url,evento.target.id, contenedor);
        }
    }, false);

}