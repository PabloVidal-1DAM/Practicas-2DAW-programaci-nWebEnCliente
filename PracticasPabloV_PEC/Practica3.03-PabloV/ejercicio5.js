"use strict"
//Ejercicio 5: Mostrando objetos II
const recorrerObjetoII = (objeto) =>{
    console.log(".......Mostrando ObjetosII........")
    // Uso un for in, ya que solo tengo que recorrer el objeto, no tengo que devolver ningún dato
    for (let clave in objeto){

        if (typeof objeto[clave] == "string"){
            console.log(clave +" : "+objeto[clave] +" //-->Tipo de Dato: String.");
        }
        else if (typeof objeto[clave] == "number"){
            console.log(clave +" : "+objeto[clave].toLocaleString("es-ES") +" //-->Tipo de Dato: Número.");
        }
        else if (Array.isArray(objeto[clave])){
            console.log(clave +" : "+objeto[clave] +" //-->Tipo de Dato: Array.");
        }
        else if (typeof objeto[clave] == "function"){
            console.log(clave +" : "+objeto[clave]+" //-->Tipo de Dato: Función.");
        }
        else if (typeof objeto[clave] == "object" && objeto[clave] != null){
            console.log(clave +" : "+objeto[clave] +" //-->Tipo de Dato: Objeto.");
            recorrerObjetoII(objeto[clave]);

        }else{
            console.log(clave+" : "+objeto[clave]+" //-->Tipo de Dato: Otro.")
        }        
     
    }
    console.log("................................")
}
export {recorrerObjetoII};