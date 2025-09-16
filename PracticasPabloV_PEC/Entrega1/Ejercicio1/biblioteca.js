"use strict";
// Ejercicio 1:  Estás Gordo
function IMC(masa, altura){
    if (isNaN(masa) || isNaN(altura)){ // en caso de no pasarle un valor numerico no se calcula nada
        console.log("Por favor, introduce solo valores numericos para calcular el IMC");
        return;
    }
    let IMC = masa /  (altura * altura);
    return IMC;
}

function calcularIMC(IMC1,IMC2){
    let mayorIMC = false;
    if (IMC1 > IMC2){
        mayorIMC = true;
    }
    return mayorIMC;
}
export {IMC, calcularIMC}