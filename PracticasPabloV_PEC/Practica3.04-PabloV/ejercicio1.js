"use strict";
const mezclandoObjetos = (array) =>{
    //punto 1:
    let arrayMayusc = array.map(valor => valor.toUpperCase());

    arrayMayusc.forEach((valor,indice,array) => {
        console.log(`Valor ${indice}: ${valor}`);
    });

    //punto 2:
    // se hace una copia del array pasado por parámetro, se ordena son .sort() y se da la vuelta al orden con .reverse()
    let arrayOrdenado = [...array].sort().reverse(); 

    console.log("Array Ordenado Alfabeticamente y al revés:")
    
    arrayOrdenado.forEach((valor,indice,array) =>{
        console.log(`Valor ${indice + 1}: ${valor}`);
    });


}
export {mezclandoObjetos};