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
    "imagenes/fila-3-columna-3.jpg"
];

const crearPiezas = () =>{
    const contenedorPiezasPuzzle = document.getElementById("contenedorPiezasPuzzle");
    let arrayImg = [];

    for (let i = 0; i< imagenes.length; i++){
        const img = document.createElement("img");
        img.classList.add("img_css");
        img.setAttribute("draggable", true);
        img.setAttribute("id", i);

        img.src = imagenes[i];
        arrayImg = [...arrayImg, img];
    }
    const arrayImgRandomizado = arrayImg.sort(() => Math.random() - 0.5);

    for (let i = 0; i< arrayImgRandomizado.length; i++){
        contenedorPiezasPuzzle.appendChild(arrayImgRandomizado[i]);
    }
}

const crearPanelJuego = () =>{
    const contenedorPanelJuego = document.getElementById("contendorPanelJuego");

    const tabla = document.createElement("table");
    for( let i = 1; i <= 3; i++){
        
        const tr = document.createElement("tr");

        for ( let j = 1; j <= 3; j++){
            const td = document.createElement("td");
            td.classList.add("estilosTabla");
            td.classList.add("arrastable");
            tr.appendChild(td);
        }
        tabla.appendChild(tr);

    }
    contenedorPanelJuego.appendChild(tabla);
}

export {crearPiezas, crearPanelJuego};

