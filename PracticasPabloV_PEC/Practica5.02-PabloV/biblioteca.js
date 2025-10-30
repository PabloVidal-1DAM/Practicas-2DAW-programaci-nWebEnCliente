"use strict";
// Ejercicio1: 
const ocultar = (array) => {
  for (let i = 0; i < array.length; i++) {
    array.item(i).classList.add("oculto");
  }
};

const mostrar = (array) => {
  array.classList.toggle("oculto");
};

const AnyadirEventos = (array) => {
  for (let i = 0; i < array.length; i++) {
    if (i % 2 === 0) {
      array[i].addEventListener("click", () => mostrar(array[i + 1]), false);
    }
  }
};

export { ocultar, mostrar, AnyadirEventos };
