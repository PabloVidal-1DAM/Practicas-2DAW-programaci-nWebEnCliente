 "use strict";
 // Ya que es una función que va a usar más de un componente, he decidido hacerla externa.
 // En la función se accede a la referencia con .current y se le va alternando la clase "ocultar" con .toggle().
 const ocultar = (referencia) => {
    referencia.current.classList.toggle("ocultar");
  };
  export {ocultar};