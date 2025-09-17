// Ejercicio 3: Números Otra vez
function multiplosTres(numero){
    if (isNaN(numero)|| numero <= 0){ // en caso de no ser un valor númerico o ser numero menor o igual a 0, no hace el resto
        console.log("Se debe de pasar un valor númerico y que sea a partir de 1");
        return;
    }else{
        let arrayNumeros = [];
        for (let i = 1; i<=numero; i++){ // iterará del 1 al numero que le pase el usuario
            if (i % 3 == 0){
                arrayNumeros.push(i); // se almacena en el array con .push aquellos números múltiplos de tres
            }
        }
        return arrayNumeros;
    }
}
export {multiplosTres};