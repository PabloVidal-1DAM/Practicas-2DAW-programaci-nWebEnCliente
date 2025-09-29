"use strict";
const mezclandoObjetos = (array) =>{
    //punto 1:
    let arrayMayusc = array.map(valor => valor.toUpperCase());

    arrayMayusc.forEach((valor,indice,array) => {
        console.log(`Valor ${indice}: ${valor}`)
    });
    //punto 2:


}
export {mezclandoObjetos};