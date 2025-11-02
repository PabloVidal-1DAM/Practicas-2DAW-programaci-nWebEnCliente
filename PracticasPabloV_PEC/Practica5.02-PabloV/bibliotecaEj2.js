"use strict";
const mostrarContenido = (contenedores, posicion) =>{
    // Se le quita o vuelve a poner la clase oculto a el contenedor con la posición que se le pase a esta función.
    contenedores.item(posicion).classList.toggle("oculto");
}
export {mostrarContenido};