"use strict";
const imagenes = [
  "imagenes/fila-1-columna-1.jpg",
  "imagenes/fila-1-columna-2.jpg",
  "imagenes/fila-1-columna-3.jpg",
  "imagenes/fila-2-columna-1.jpg",
  "imagenes/fila-2-columna-2.jpg",
  "imagenes/fila-2-columna-3.jpg",
  "imagenes/fila-3-columna-1.jpg",
  "imagenes/fila-3-columna-2.jpg",
  "imagenes/fila-3-columna-3.jpg",
];

const contenedorPanelJuego = document.getElementById("contendorPanelJuego");
const contenedorPiezasPuzzle = document.getElementById("contenedorPiezasPuzzle");

const crearPiezas = () => {
  contenedorPiezasPuzzle.classList.add("zonaSoltar");
  let arrayImg = [];

  for (let i = 0; i < imagenes.length; i++) {
    const img = document.createElement("img");
    img.classList.add("img_css");
    img.setAttribute("draggable", true);
    img.setAttribute("id", i);

    img.src = imagenes[i];
    arrayImg = [...arrayImg, img];
  }
  const arrayImgRandomizado = arrayImg.sort(() => Math.random() - 0.5);

  for (let i = 0; i < arrayImgRandomizado.length; i++) {
    contenedorPiezasPuzzle.appendChild(arrayImgRandomizado[i]);
  }
};

const crearPanelJuego = () => {
  const tabla = document.createElement("table");
  for (let i = 1; i <= 3; i++) {
    const tr = document.createElement("tr");

    for (let j = 1; j <= 3; j++) {
      const td = document.createElement("td");
      td.classList.add("estilosTabla");
      td.classList.add("zonaSoltar");
      tr.appendChild(td);
    }
    tabla.appendChild(tr);
  }
  contenedorPanelJuego.appendChild(tabla);
};

const crearBotonReinicio = () => {
  const contenedorBtnReinicio = document.getElementById("contenedorBotonReinicio");
  const botonReinicio = document.createElement("button");
  botonReinicio.textContent = "Reiniciar Puzzle";
  botonReinicio.setAttribute("id", "btnReinicio");
  botonReinicio.classList.add("btnReinicio_css");
  contenedorBtnReinicio.appendChild(botonReinicio);
};

// Verificación de que el puzzle ha sido colocado correctamente:
const verificarPuzzle = () => {
  const imagenesPuzzle = contenedorPanelJuego.getElementsByTagName("img");
  var puzzleCorrecto = true;

  if (imagenesPuzzle.length === 9) {
    for (let i = 0; i < imagenesPuzzle.length; i++) {
      if (parseInt(imagenesPuzzle.item(i).getAttribute("id")) !== i) {
        puzzleCorrecto = false;
        break;
      }
    }

    if (puzzleCorrecto) {
      const p = document.createElement("p");
      p.textContent = "Puzzle Solucionado Correctamente";
      p.classList.add("estiloTexto-DeVictoria");
      p.setAttribute("id", "mensajePuzzleSolucionado");
      document.body.appendChild(p);
    }
  }
};

const reiniciarJuego = () => {
  const mensaje = document.getElementById("mensajePuzzleSolucionado");

  if (mensaje !== null) {
    mensaje.remove();
  }

  contenedorPanelJuego.innerHTML = "";
  contenedorPiezasPuzzle.innerHTML = "";

  crearPiezas();
  crearPanelJuego();
};

export { crearPiezas, crearPanelJuego, verificarPuzzle, crearBotonReinicio, reiniciarJuego };
