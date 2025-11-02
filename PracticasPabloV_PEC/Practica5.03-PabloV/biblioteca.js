"use strict";

const colores = ["#1E1E1E", "#FFFFFF", "#007ACC", "#FFB400", "#E94E77"];
const selectorColor = document.getElementById("selectorColores");
const lienzo = document.getElementById("lienzo");
let colorUsado = null;

const anyadirColores = () => {
  const elementoUl = document.createElement("ul");

  for (let i = 0; i < colores.length; i++) {
    const elementoLi = document.createElement("li");
    elementoLi.style = `background: ${colores[i]}`;
    elementoLi.setAttribute("id", `${i}`);

    elementoUl.appendChild(elementoLi);
  }
  elementoUl.classList.add("selectorColores_css");
  selectorColor.appendChild(elementoUl);
};


const cambiarColor = (color) => {
    const indice = color.getAttribute("id");
    colorUsado = indice;
};

const crearLienzo = () =>{
    const tabla = document.createElement("table");

    for (let i = 1; i<= 6; i++){
        const fila = document.createElement("tr");

        for (let j = 1; j<= 10; j++){
            const datos = document.createElement("td");
            datos.innerText = "p";
            fila.appendChild(datos);
        }

        tabla.appendChild(fila);
    }
    lienzo.appendChild(tabla);

}

const pintar = (celda) =>{
   celda.style.backgroundColor = colores[colorUsado];
}

export { anyadirColores, cambiarColor, crearLienzo, pintar };
