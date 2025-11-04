"use strict";

const colores = ["#1E1E1E", "#FFFFFF", "#007ACC", "#FFB400", "#E94E77"];
const selectorColor = document.getElementById("selectorColores");
const lienzo = document.getElementById("lienzo");
let colorUsado = null;

const anyadirColores = () => {
  const elementoUl = document.createElement("ul");

  for (let i = 0; i < colores.length; i++) {
    const elementoButton = document.createElement("button");
    elementoButton.style = `background: ${colores[i]}`;
    elementoButton.setAttribute("id", `${i}`);

    elementoUl.appendChild(elementoButton);
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
    tabla.classList.add("tabla_lienzo");

    for (let i = 1; i<= 60; i++){
        const fila = document.createElement("tr");

        for (let j = 1; j<= 60; j++){
            const datos = document.createElement("td");
            datos.classList.add("celdas_lienzo");
            fila.appendChild(datos);
        }

        tabla.appendChild(fila);
    }
    lienzo.appendChild(tabla);

}

const crearBtnBorrar = () =>{
  const btn = document.createElement("button");
  btn.textContent = "Borrar Dibujado";
  btn.classList.add("btn_borrado");
  lienzo.appendChild(btn);
}

const pintar = (celda) =>{
   celda.style.background = colores[colorUsado];
}

const borrarTodo = (celdas) =>{

  let contador = 0;
  for (let i = 1; i<=60; i++){
                
    for (let j = 1; j<= 60; j++){
      celdas.item(contador).removeAttribute("style");
      contador++;
    }
  }
}

export { anyadirColores, cambiarColor, crearLienzo, pintar, crearBtnBorrar, borrarTodo };
