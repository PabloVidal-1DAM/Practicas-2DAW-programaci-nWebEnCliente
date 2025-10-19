"use strict";
const carrusel = [
  "https://i.pinimg.com/736x/ce/54/6e/ce546e085e2d0409f6489fba537b041b.jpg",
  "https://i.pinimg.com/736x/cf/f4/79/cff479a9ced70d1854a8bae3d6a9826d.jpg",
  "https://i.pinimg.com/736x/be/35/02/be35022ab4ff411bfc773a38851b2eb7.jpg",
];

let ordenImagen = 0;
let elemento = null;

const moverCarrusel = () => {
  if (!elemento) {
    elemento = document.createElement("img");
    document.body.appendChild(elemento);
  }

  for (let i = 0; i < carrusel.length; i++) {
    if (i === ordenImagen) {
      elemento.setAttribute("src", carrusel[i]);
      break;
    }
  }
  ordenImagen++;

  if (ordenImagen === carrusel.length) {
    ordenImagen = 0;
  }
};

const launcher = () => {
  setInterval(moverCarrusel, 2000);
};

export { moverCarrusel, launcher };
