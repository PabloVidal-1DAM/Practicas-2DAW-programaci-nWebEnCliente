// Ejercicio 4: Potencia, de números
function calcularPotencia(base, exponente){
    if (isNaN(base) || isNaN(exponente)){
        console.log("Se debe de pasar un valor númerico");
        return;
    }else{

        //Caso especial: si el exponiente = 0, el resultado siempre es 1
        if (exponente == 0){
            return 1;
        }

        let resultadoPotencia = 1;
        let contador = 0;
        while(contador < exponente){
            resultadoPotencia *= base
            contador ++;
        }

        return resultadoPotencia;
    }
}
export {calcularPotencia};