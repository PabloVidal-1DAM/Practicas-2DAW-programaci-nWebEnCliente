"use strict"
//Ejercicio 5: Mostrando objetos II
const recorrerObjetoII = (objeto) =>{
    for (let clave in objeto){

        if (typeof objeto[clave] == "string"){
            console.log("Clave: "+clave +"Valor: "+objeto[clave] +"//-->Tipo de Dato: String.");
        }
        else if (typeof objeto[clave] == "number"){
            console.log("Clave: "+clave +"Valor: "+objeto[clave].toLocaleString("es-ES") +"//-->Tipo de Dato: Número.");
        }
        else if (Array.isArray(objeto[clave])){
            console.log("Clave: "+clave +"Valor: "+objeto[clave] +"//-->Tipo de Dato: Array.");
        }
        else if (typeof objeto[clave] == "function"){
            console.log("Clave: "+clave +"Valor: "+objeto[clave]+"//-->Tipo de Dato: Función.");
        }
        else if (typeof objeto[clave] == "object" && objeto[clave] != null){
            console.log("Clave: "+clave +"Valor: "+objeto[clave] +"//-->Tipo de Dato: Objeto.");
            recorrerObjetoII(objeto[clave]);

        }else{
            console.log("Clave: "+clave+" Valor: "+objeto[clave]+"//-->Tipo de Dato: Otro.")
        }        
     
    }
}
export {recorrerObjetoII};