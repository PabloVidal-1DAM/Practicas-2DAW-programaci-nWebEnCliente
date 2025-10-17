"use strict";

const cambiarEstilo = () => {
  let parrafos = document.body.getElementsByTagName("p");
  let numeroRamdom = generarNumAleatorio();
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
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);

    let colorGenerado = `rgb(${r},${g},${b})`;
    return colorGenerado;
}
export { cambiarEstilo, launcher };
