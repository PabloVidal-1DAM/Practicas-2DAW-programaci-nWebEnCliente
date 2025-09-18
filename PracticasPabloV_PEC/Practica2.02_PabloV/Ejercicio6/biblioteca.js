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
    }
}
function sumar(numero1, numero2){

}
function restar(numero1, numero2){
    
}
function dividir(numero1, numero2){
    
}
function multiplicar(numero1,numero2){

}