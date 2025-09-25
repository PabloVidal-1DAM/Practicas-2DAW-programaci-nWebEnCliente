"use strict";
import {crearCurso} from "./ejercicio1.js";
import {recorrerObjeto} from "./ejercicio2.js";
import {crearJSON} from "./ejercicio3.js";

//Ejercicio 1:
let objetoCurso = crearCurso("Desarrollo Aplicaciones Web.", 2005, "Curso para ser desarrollador web.", ["juan", "Maria", "Pepe", "jimenez"]);

//Ejercicio2:
console.log(recorrerObjeto(objetoCurso));

//Ejercicio3:
let objetoDisciente = crearJSON();
console.log(objetoDisciente.calcularMedia());
console.log(objetoDisciente.imprimirAficiones());
objetoDisciente.imprimirInforme();

//Ejercicio4:
console.log(objetoCurso.matricular(objetoDisciente));
