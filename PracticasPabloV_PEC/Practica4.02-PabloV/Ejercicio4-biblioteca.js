"use strict";
// NOTA: No sabía como hacer lo de la transición en javascript y no tengo el tiempo para hacerlo, por lo que solo he
// hecho lo de que vayan cambiando las imágenes del carrusel cada 2 segundos.
const carrusel = [
  "https://i.pinimg.com/736x/ce/54/6e/ce546e085e2d0409f6489fba537b041b.jpg",
  "https://i.pinimg.com/736x/cf/f4/79/cff479a9ced70d1854a8bae3d6a9826d.jpg",
  "https://i.pinimg.com/736x/be/35/02/be35022ab4ff411bfc773a38851b2eb7.jpg",
];

let ordenImagen = 0;
let elemento = null;

const moverCarrusel = () => {
  // Solo se ejecutará 1 vez para no generar más imágenes dentro de divs.
  if (!elemento) {
    let div = document.createElement("div");
    div.setAttribute("id", "Img-Carrusel");
    
    elemento = document.createElement("img");

    div.appendChild(elemento);
    document.body.appendChild(div);
  }

  // For que recorre el carrusel.
  // Cuando llega a la posición de "ordenImagen", le añade la imagén del carrusel que pertenece a esa posición.
  for (let i = 0; i < carrusel.length; i++) {
    if (i === ordenImagen) {
      elemento.setAttribute("src", carrusel[i]);
      break;
    }
  }
  // Se aumenta para pasar a la siguiente.
  ordenImagen++;

  // Se resetea al valor original al llegar a la última imagen del carrusel para no salirse.
  if (ordenImagen === carrusel.length) {
    ordenImagen = 0;
  }
};

// Al principio intenté usar un bucle while infinito.
/* Pero el navegador se bloqueaba y no mostraba nada,
   por lo que he optado por usar setInterval() de javascript. */
const launcher = () => {
  setInterval(moverCarrusel, 2000);
};

export { moverCarrusel, launcher };
