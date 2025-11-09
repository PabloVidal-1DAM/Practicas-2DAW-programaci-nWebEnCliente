"use strict";
import {
  crearPiezas,
  crearPanelJuego,
  verificarPuzzle,
  crearBotonReinicio,
  reiniciarJuego
} from "./biblioteca.js";

window.onload = () => {
    // Se crean los elementos del juego: las piezas del puzzle, el campo de juego y el botón para reiniciar.
  crearPiezas();
  crearPanelJuego();
  crearBotonReinicio();

  const contenedorPanelJuego = document.getElementById("contendorPanelJuego");
  const contenedorPiezasPuzzle = document.getElementById("contenedorPiezasPuzzle");
  const btnReinicio = document.getElementById("btnReinicio");

  // Se le asigan los eventos del para poder arrastrar y soltar al contenedor de las piezas del principio.
  contenedorPiezasPuzzle.addEventListener(
    "dragover",
    (evento) => {
      evento.preventDefault();
    },
    false
  );

  contenedorPiezasPuzzle.addEventListener(
    "dragstart",
    (evento) => {
        // Se hace uso del dataTransfer para almacenar en memoria el atributo id de la imagen que haga saltar el evento.
      evento.dataTransfer.setData("id", evento.target.id);
    },
    false
  );

  contenedorPiezasPuzzle.addEventListener(
    "drop",
    (evento) => {
        // Unicamente se podrá soltar el elemento a una zona que tenga la clase "zonaSoltar"
      if (evento.target.classList.contains("zonaSoltar")) {
        const elementoSeleccionado = document.getElementById(
            // Se accede al dataTransfer para seleccionar la imagen que ha hecho saltar el evento para insertarla en el contenedor.
          evento.dataTransfer.getData("id")
        );
        evento.target.appendChild(elementoSeleccionado);
      }
    },
    false
  );

  contenedorPanelJuego.addEventListener(
    "dragover",
    (evento) => {
      evento.preventDefault();
    },
    false
  );

  contenedorPanelJuego.addEventListener(
    "dragstart",
    (evento) => {
        // Uso de dataTransfer para guardar el id de la imgen que lo dispare.
      evento.dataTransfer.setData("id", evento.target.id);
    },
    false
  );

  contenedorPanelJuego.addEventListener(
    "drop",
    (evento) => {
      if (
        evento.target.classList.contains("zonaSoltar") &&
        !evento.target.hasChildNodes()
      ) {
        const elementoSeleccionado = document.getElementById(
          evento.dataTransfer.getData("id")
        );
        evento.target.appendChild(elementoSeleccionado);
        verificarPuzzle();
      }
    },
    false
  );

  btnReinicio.addEventListener(
    "click",
    (evento) => {
        reiniciarJuego();
    },
    false
  );

}; // fin del window onload.
