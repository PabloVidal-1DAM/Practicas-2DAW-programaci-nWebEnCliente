"use strict"; 
// importación de la funcion del ej de la biblioteca
import {calcularIMC, IMC} from "./biblioteca.js";

let pesoMarcos = 80;
let alturaMarcos = 180;

let pesoJuan = 68;
let alturaJuan = 150;

let IMCMarcos = IMC(pesoMarcos, alturaMarcos);
let IMCJuan = IMC(pesoJuan, alturaJuan);

console.log("Tiene Marcos un IMC mayor que el de Juan?: " + calcularIMC(IMCMarcos, IMCJuan));