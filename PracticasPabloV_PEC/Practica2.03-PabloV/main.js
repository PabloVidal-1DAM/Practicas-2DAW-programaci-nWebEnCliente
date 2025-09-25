"use strict";
import {crearCurso} from "./ejercicio1.js";
import {recorrerObjeto} from "./ejercicio2.js";
import {crearJSON} from "./ejercicio3.js";

//Ejercicio 1:
let objetoCurso = crearCurso("Desarrollo Aplicaciones Web", 2005, "Curso para ser desarrollador web.", ["juan", "Maria", "Pepe", "jimenez"]);

//Ejercicio2:
console.log(recorrerObjeto(objetoCurso));

//Ejercicio3:
let objetoJSON = crearJSON();
console.log(objetoJSON.calcularMedia());
console.log(objetoJSON.imprimirAficiones());
console.log(objetoJSON.imprimirInforme());
