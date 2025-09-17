function soloNumeros(numero){
    if (isNaN(numero)){
        console.log("Únicamente se aceptan valores númericos")
    }
    analisisNumerico(numero);
}
function analisisNumerico(numero){
    // Comprobación de par/impar:
    console.log("EL numero " +numero+ "es: "(numero % 2 == 0 ? "par" : "impar"));

    // Comprobación de número negativo o positivo
}

export {soloNumeros, analisisNumerico};