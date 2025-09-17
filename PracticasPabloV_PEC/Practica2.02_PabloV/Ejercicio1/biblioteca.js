//Ejercicio 1: Números y meses
function comprobarMes(numero){
    if (isNaN(numero)){  // En caso de que el dato no es númerico, no devuelve nada
        console.log("Para comprobar el més se ha de pasar un valor númerico")
        return;
    }
    if (numero < 1 || numero > 12){ // En caso de pasar un número fuera de rango, se le comenta al usuario
        console.log("Introduce un rango válido de números, solo existen 12 meses");
        return;
    }
let meses = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];

// Se devuelve la posicion del array que pertenece al rango que se ha pasado.
// Adaptandose a la posicion en memoria de un array, por eso el -1
let mensajeReturn = "El Número que se ha pasado pertenece al Més: "+meses[numero -1]; 
return mensajeReturn;

}

export {comprobarMes};