"use strict";
import {traerDatos, insertarPeliculas, mostrarDetalle} from "./biblioteca.js";
window.onload = ()=>{
    const url = "https://swapi.info/api/films";
    const aside = document.getElementById("app");
    const contenedor = document.getElementById("detalles");

    // Se inserta el nombre de las peliculas en un <aside>.
    insertarPeliculas( url, aside);

    // Delegación de eventos para mostrar las películas con toda la información.
    aside.addEventListener("click", (evento) =>{
        if (evento.target.tagName === "LI"){
            mostrarDetalle(url,evento.target.id, contenedor);
        }
    }, false);

}