// Ejercicio 5: Media, de números
function media(){
    for(let i= 0; i < arguments.length; i++){ // el pseudoarray representa la cantidad de numeros pasada a la función
        if (isNaN(arguments[i]) || arguments[i] == 0){
            //Comprobación de número entero positivo o 0
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
    // Para sacar la media aritmética es necesaria la suma de todos los números y la división por la cantidad de numeros pasada
    mediaAritmetica = sumaNumeros / arguments.length;

    return mediaAritmetica;
}
export {media};