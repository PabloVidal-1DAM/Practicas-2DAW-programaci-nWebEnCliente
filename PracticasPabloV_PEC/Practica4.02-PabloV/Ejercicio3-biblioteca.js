"use strict";

const cambiarEstilo = () => {
  // Se seleccionan todos los parrafos de la web.
  let parrafos = document.body.getElementsByTagName("p");
  // 1 función, 1 tarea.
  let numeroRamdom = generarNumAleatorio();
  // La posición de memoria que pertenece al número random es la que recibe el estilo.
  parrafos[numeroRamdom].setAttribute("style", `background-color: ${generarColor()}`);
};

const launcher = () =>{
    setInterval(cambiarEstilo, 1000);
}

const generarNumAleatorio = () => {
  let numero = Math.floor(Math.random() * 5);
  return numero;
};

const generarColor = () =>{
  // Para generar el color random, se usan 3 números random que van del 0 al 255
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);

  // Que luego se juntan en un string rgb().
    let colorGenerado = `rgb(${r},${g},${b})`;
    return colorGenerado;
}
export { cambiarEstilo, launcher };
