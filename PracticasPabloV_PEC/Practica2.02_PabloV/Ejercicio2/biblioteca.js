// Ejercicio 2: Sólo Números
function soloNumeros(numero){
    if (isNaN(numero)){ // comprueba si el usuario ha pasado un número
        console.log("Únicamente se aceptan valores númericos")
        return;
    }
    analisisNumerico(numero);
}
function analisisNumerico(numero){
    // Comprobación de par/impar:
    console.log("EL numero " +numero+ "es: "(numero % 2 == 0 ? "par" : "impar"));

    // Comprobación de número negativo o positivo
    console.log("Es: "(numero >=0 ? "positivo" : "negativo"));

    //Comprobación de número primo
    let primo = false;
    let contadorPrimo = 0;

    for (let i = 1; i<= numero; i++){
        if(numero % i == 0){
            contadorPrimo++;
        }
    }

    if (contadorPrimo === 2){
        primo = true;
    }

    console.log("Es primo?: " + primo)


}

export {soloNumeros, analisisNumerico};