// Ejercicio 5: Media, de números
function media(){
    //Comprobación de número entero positivo o 0
    for(let i= 0; i < arguments.length; i++){
        if (isNaN(arguments[i]) || arguments[i] == 0){
            console.log("Únicamente se aceptan valores númericos, que no sean 0");
            return;
        }
    }

    let sumaNumeros = 0;
    let mediaAritmetica = 0;
    // recoger el pseudoarray para sacar la media y almacenarla
    for (let i = 0; i < arguments.length; i++){
        sumaNumeros += arguments[i];
    }
    // Para sacar la media aritmética es necesaria la suma de todos los números y 
    mediaAritmetica = sumaNumeros / arguments.length;

    return mediaAritmetica;
}
export {media};