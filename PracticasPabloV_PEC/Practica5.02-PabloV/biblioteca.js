"use strict";
// Ejercicio1: 

// Se añade la clase oculto al elemento que se pase.
const ocultar = (array) => {
  for (let i = 0; i < array.length; i++) {
    array.item(i).classList.add("oculto");
  }
};

// Se oscila de "oculto" a "" al elemento que se le pase como parámetro.
const mostrar = (array) => {
  array.classList.toggle("oculto");
};

// Se añaden los eventos que gastarán únicamente las etquetas <h1>, para ello
// juego con las posiciones pares e impares para añadir el evento.
const AnyadirEventos = (array) => {
  for (let i = 0; i < array.length; i++) {
    if (i % 2 === 0) {
      array[i].addEventListener("click", () => mostrar(array[i + 1]), false);
    }
  }
};

export { ocultar, mostrar, AnyadirEventos };
