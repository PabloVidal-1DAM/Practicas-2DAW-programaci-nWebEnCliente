// Ejercicio 6: Calculadora
function calculadora(numero1, numero2, operador){
    if (isNaN(numero1, numero2)){
        console.log("Únicamente se aceptan valores númericos");
        return;
    }

    if (operador === "+" ){
        sumar(numero1, numero2);
    }else if(operador === "-" ){
        restar(numero1, numero2);
    }else if(operador === "*" ){
        multiplicar(numero1, numero2);
    }else if(operador === "/" ){
        dividir(numero1, numero2);
    }else{
        console.log("No se aceptarán operadores que no sean: Sumar, Restar, Multiplicar o Dividir.");
        return;
    }
}
function sumar(numero1, numero2){
    let resultado = numero1 + numero2;
    return resultado;
}
function restar(numero1, numero2){
    let resultado = numero1 - numero2;
    return resultado;
    
}
function dividir(numero1, numero2){
    let resultado = numero1 / numero2;
    return resultado;
}
function multiplicar(numero1,numero2){
    let resultado = numero1 * numero2;
    return resultado;
}
export {calculadora ,sumar, restar, dividir, multiplicar};