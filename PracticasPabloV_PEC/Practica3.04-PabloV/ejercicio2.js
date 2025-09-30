"use strict";

const filtrandoObjetos = ()=>{
    let array1 = [];
    let array2 = [];
    let array3 = [];
    for (let i = 0; i<10; i++){
        array1[i] = generarNumAleatorio();
        array2[i] = generarNumAleatorio();
        array3[i] = generarNumAleatorio();
    }
    // se hace una copia de todos los arrays anteriores
    let arraySumado = [...array1,...array2, ...array3];

   let arrayFinal = arraySumado.filter((valor,indice,array) =>{
        return(
            valor >= 5
        );
    });

    console.log("Números Mayor o igual a 5:");
    arrayFinal.forEach((valor,indice,array) =>{
        console.log(`${valor}`)
    });
}

const generarNumAleatorio = ()=>{
    // Math.random genera un número que va del 0 al 9, y el +1 que hay fuera aumenta el rango del mínimo (del 1 al 10)
    // por otro lado, Math.floor redondea el resultado hacía arriba o hacía abajo para no generar números de tipo double.
    return(Math.floor(Math.random() *10) +1 ); 
}

export {filtrandoObjetos, generarNumAleatorio};