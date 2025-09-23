"use strict";
//Ejercicio 1: Constructor de Objetos

 /* si a descripción no se le pasa nada, pondra "por defecto" al incializarlo en el constructor, y este
 constructor se vuelve a usar para inicializar alumnado como un aray vacío, como pide el ejercicio*/
const crearCurso =(nombre, anio, descripcion = "Por defecto",alumnado = []) =>{

    /* función callback que recorrerá alumnado para ver si todo lo que contiene son Strings*/
    let verificarCadena = alumnado.every((valor,indice,array) => typeof valor === "string")

    if (!verificarCadena){
        console.log("Unicamente se deben pasar cadenas de texto al array de alumnos")
        alumnado = undefined;
    }

    if(!isNaN(nombre)){
        console.log("Unicamente se acepta texto para el nombre del curso")
        nombre = undefined;
    }


    return{
        nombreCurso: nombre,
        anio: anio,
        descripcion: descripcion,
        alumnado: [...alumnado]
    };
}

export {crearCurso};
