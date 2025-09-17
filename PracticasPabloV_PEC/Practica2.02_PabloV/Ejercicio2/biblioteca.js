function soloNumeros(numero){
    if (isNaN(numero)){
        console.log("Únicamente se aceptan valores númericos")
    }
}
function analisisNumerico(numero){
    // comprobación de par/impar:
    console.log("EL numero " +numero+ "es: "(numero % 2 == 0 ? "par" : "impar"));
}