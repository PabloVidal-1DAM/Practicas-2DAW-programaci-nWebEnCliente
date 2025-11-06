"use strict";
import {anyadirColores, cambiarColor, crearLienzo, pintar, crearBtnBorrar, borrarTodo} from "./biblioteca.js";

window.onload = () =>{
    // Se insertan al DOM los botones para seleccionar el color, el lienzo donde se pintará 
    // y el boton para borrar el dibujo.
    anyadirColores();
    crearLienzo();
    crearBtnBorrar();

    // Se selecciona el div donde se han insertado los botones para cambiar de color.
    // Luego, se le añade un evento al contenedor y se usa delegación de eventos para los botones,
    // que llama al evento que se encarga de almacenar el color seleccionado.
    const selectorColor = document.getElementById("selectorColores");
    selectorColor.addEventListener("click",(evento) =>{
        if(evento.target.tagName ==="BUTTON"){
            cambiarColor(evento.target);
        }
    }, false);

    // Se selecciona el div donde se ha insertado la tabla que representa al lienzo, a dicho contenedor
    // se le añaden los eventos necesarios para hacer click, mantener y pintar hasta que se deje de hacer click.

    // Para ello, cuando se hace click se usa una variable global llamada "pintando" que será true hasta que se deje de hacer click
    // con el evento "mouseup", y que se usará para conseguir este efecto de hacer click y mantener para pintar.
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

    // Y por último, se le asigna evento de tipo click al boton que se encargará de borrar todo lo dibujado.
    // Para ello, se capturan todas las celdas de la tabla y se pasan al evento de borrar.
    lienzo.addEventListener("click", (evento) =>{
        if (evento.target.tagName === "BUTTON"){
            let celdas = document.getElementsByTagName("td");
            borrarTodo(celdas);
        }
    }, false)
}
