"use strict";
//Ejercicio2: Mostrando objetos.
const recorrerObjeto = (objeto) =>{
    //  he usado un for in ya que solo tengo que recorrer el objeto, mostrando el clave-valor de cada atributo del objeto que se pase como parámetro
    for (let clave in objeto){
        console.log(clave+ ": "+objeto[clave]);
    };
}
export {recorrerObjeto};