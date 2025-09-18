// Ejercicio 6: Calculadora
function calculadora(numero1, numero2, operador){
    if (isNaN(numero1) || isNaN(numero2)){ // comprobación de valor númerico
        console.log("Únicamente se aceptan valores númericos");
        return;
    }

    if (operador === "+" ){
        return sumar(numero1, numero2);
    }else if(operador === "-" ){        // comprobación de que el usuario pasa el operador correcto
        return restar(numero1, numero2); // en caso afirmativo, llamar a la respectiva operación.
    }else if(operador === "*" ){
        return multiplicar(numero1, numero2);
    }else if(operador === "/" ){
        return dividir(numero1, numero2);
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
    if (numero2 ===0){ // caso especial para la división entre 0
        console.log("No se puede dividir entre 0");
        return;
    }
    let resultado = numero1 / numero2;
    return resultado;
}
function multiplicar(numero1,numero2){
    let resultado = numero1 * numero2;
    return resultado;
}
export {calculadora ,sumar, restar, dividir, multiplicar};