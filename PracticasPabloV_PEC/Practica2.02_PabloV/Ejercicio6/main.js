// importar la función que realizará el ejercicio:
import {calculadora,sumar,restar,multiplicar,dividir} from "./biblioteca.js";

let numero1 = 2;
let numero2 = 3;
let operador ="+";

console.log(numero1+" "+operador+ " "+numero2+" = "+calculadora(numero1, numero2, operador));