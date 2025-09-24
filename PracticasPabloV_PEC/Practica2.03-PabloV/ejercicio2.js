"use strict";
//Ejercicio2: Mostrando objetos.
const recorrerObjeto = (objeto) =>{
    // for in que recorre el objeto, mostrando el clave-valor de cada atributo del objeto que se pase como parámetro
    for (let clave in objeto){
        console.log(clave+ ": "+objeto[clave]);
    };
}
export {recorrerObjeto};