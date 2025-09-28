"use strict";
//Ejercicio 1: Constructor de Objetos.

 /* si a descripción no se le pasa nada, pondrá "por defecto" al inicializarlo en el constructor, y este
 constructor se vuelve a usar para inicializar alumnado como un array vacío, como pide el ejercicio*/
const crearCurso =(nombre, anio, descripcion = "Por defecto.",alumnado = []) =>{

    /* función callback que recorrerá el array alumnado para ver si todo lo que contiene son Strings*/
    let verificarCadena = alumnado.every((valor,indice,array) => typeof valor === "string");

    if (!verificarCadena){
        console.log("Únicamente se deben pasar cadenas de texto al array de alumnos.");
        alumnado = undefined;
    }

    if(!isNaN(nombre)){
        console.log("Únicamente se acepta texto para el nombre del curso.");
        nombre = undefined;
    }

    let curso = {
        nombreCurso: nombre,
        anio: anio,
        descripcion: descripcion,
        alumnado: [...alumnado],
        //Ejercicio4:
        // Función que devuelve una copia del array de alumnado + el objeto que se le pase como parámetro
        matricular: function matricular(objeto){
            return(this.alumnado = [...this.alumnado, objeto]);
        }
    }

    return(curso);
}

export {crearCurso};
