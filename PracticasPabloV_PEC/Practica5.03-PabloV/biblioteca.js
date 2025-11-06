"use strict";

const colores = ["#1E1E1E", "#FFFFFF", "#007ACC", "#FFB400", "#E94E77"];
const selectorColor = document.getElementById("selectorColores");
const lienzo = document.getElementById("lienzo");
let colorUsado = null;

const anyadirColores = () => {
  // Creación de los botones para seleccionar el color.
  const elementoUl = document.createElement("ul");

  // Se hace uso del array de los colores para cambiar el color.
  // Además, se le añade a cada botón un id que será usado más adelante.
  for (let i = 0; i < colores.length; i++) {
    const elementoButton = document.createElement("button");
    elementoButton.style = `background: ${colores[i]}`;
    elementoButton.setAttribute("id", `${i}`);

    elementoUl.appendChild(elementoButton);
  }
  // Clase CSS externa para darle estilo.
  elementoUl.classList.add("selectorColores_css");
  selectorColor.appendChild(elementoUl);
};

// Se pasa el target del elemento "<button>" que ha disparado el evento y se usa
// el id que se añadió a cada botón para determinar el nuevo color a usar.
const cambiarColor = (color) => {
    const indice = color.getAttribute("id");
    colorUsado = indice;
};

// Se crea el lienzo para dibujar, que es una tabla de 60 x 60 celdas.
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

// Se crea el botón que se encargará de quitar el estilo a todos los elementos <td>, o dicho de otro modo,
// borrar lo dibujado.
const crearBtnBorrar = () =>{
  const btn = document.createElement("button");
  btn.textContent = "Borrar Dibujado";
  btn.classList.add("btn_borrado");
  lienzo.appendChild(btn);
}

// Se pasa el target del elemento <td>, y se le añade estilo en linea usando el array de colores de ariba y
// la variable global que guarda que color se está usando en ese momento dado.
const pintar = (celda) =>{
   celda.style.background = colores[colorUsado];
}

// Para borrar todas las celdas, se vuelve a recorrer todos los elementos td y con ayuda de un contador
// que va recorriendo todas sus posiciones, se elimina el atributo que le da estilo.
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
