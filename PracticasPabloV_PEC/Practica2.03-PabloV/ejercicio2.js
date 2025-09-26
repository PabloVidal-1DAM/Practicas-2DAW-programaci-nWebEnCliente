"use strict";
//Ejercicio2: Mostrando objetos.
const recorrerObjeto = (objeto) =>{
    //  for in que recorre el objeto, mostrando el clave-valor de cada atributo del objeto que se pase como parámetro
    console.log(".......Mostrando Objeto........")
    for (let clave in objeto){
        console.log(clave+ ": "+objeto[clave]);
    };
    console.log("...............................")
}
export {recorrerObjeto};