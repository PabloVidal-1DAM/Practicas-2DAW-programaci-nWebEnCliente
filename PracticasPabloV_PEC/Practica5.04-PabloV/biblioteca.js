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
  // Se le añade al contenedor la clase que lo identifica como elemento al cual se le podrán soltar otros.
  contenedorPiezasPuzzle.classList.add("zonaSoltar");

  let arrayImg = [];

  // Se crean las imágenes que luego se insertarán en el contenedor de las piezas de juego
  for (let i = 0; i < imagenes.length; i++) {
    const img = document.createElement("img");
    img.classList.add("img_css");
    img.setAttribute("draggable", true);
    // Se le asigna a cada posicion una id que luego usaré para verificar que el puzzle está bien formado
    img.setAttribute("id", i);

    img.src = imagenes[i];
    // Se usa el desparrame para crear un array nuevo que almacene dichas imagenes.
    arrayImg = [...arrayImg, img];
  }
  // Se usa Math.random() para aleatorizar las posiciones de este array.
  const arrayImgRandomizado = arrayImg.sort(() => Math.random() - 0.5);

  // Y por último se usa este array aleatorizado para insertar en el contenedor.
  for (let i = 0; i < arrayImgRandomizado.length; i++) {
    contenedorPiezasPuzzle.appendChild(arrayImgRandomizado[i]);
  }
};

// Se crea el elemento que será donde se juega el juego, una tabla de 3 x 3, donde
// los elementos <td> gastarán la clase "zonaSoltar" para indicar que es otra zona en la que soltar objetos.
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

// Se crea el boton que seá utilizado para reiniciar el juego y empezar de nuevo.
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
  
  // Se seleccionan las imagenes colocadas en la zona del juego que existan en ese momento.
  const imagenesPuzzle = contenedorPanelJuego.getElementsByTagName("img");
  var puzzleCorrecto = true;

  // Si se han colocado todas las imagenes, se recorren para comprobar que están bien posicionadas
  // usando su atributo id.
  if (imagenesPuzzle.length === 9) {
    for (let i = 0; i < imagenesPuzzle.length; i++) {
      if (parseInt(imagenesPuzzle.item(i).getAttribute("id")) !== i) {
        puzzleCorrecto = false;
        break;
      }
    }

  // Si pasa el bucle for anterior sin cambiar a falso, es correcto, por lo que se crea el elemento <p>
  // que felicita al usuario y se inserta al DOM, al final del todo.
    if (puzzleCorrecto) {
      const p = document.createElement("p");
      p.textContent = "Puzzle Solucionado Correctamente";
      p.classList.add("estiloTexto-DeVictoria");
      p.setAttribute("id", "mensajePuzzleSolucionado");
      document.body.appendChild(p);
    }
  }
};

// Reinicio del juego que se inicia cada vez que se le de al boton de reinicio:
const reiniciarJuego = () => {
  
  // Se selecciona el mensaje que felicita al usuario al resolver el puzle  (si existe en ese momento).
  const mensaje = document.getElementById("mensajePuzzleSolucionado");

  // ya que puede que este mensaje no exista, se verifica en un if y
  // si existe se borra esté donde esté en el DOM con .remove().
  if (mensaje !== null) {
    mensaje.remove();
  }

  // Se dejan los contenedores en lo que se ha inertado toda la lógica del programa vacío con innerHTML().
  contenedorPanelJuego.innerHTML = "";
  contenedorPiezasPuzzle.innerHTML = "";

  // Se vuelve a crear todo menos el boton de reinicio, que no esta en los contenedores anteriores que se han borrado.
  crearPiezas();
  crearPanelJuego();
};

export { crearPiezas, crearPanelJuego, verificarPuzzle, crearBotonReinicio, reiniciarJuego };
