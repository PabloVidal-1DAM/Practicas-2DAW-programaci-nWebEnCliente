"use strict";

const insertarTabla = () =>{
    let tabla = document.createElement("table");
    let contador = 0;
    for (let i = 0; i< 10; i++){

        let fila = document.createElement("tr");

        for(let j=0; j< 10; j++){
            contador++;
            let celda = document.createElement("td");

            if(esprimo(contador)){
                setTimeout(() =>{celda.classList.add("numerosPrimos")}, 2000);
            }

            celda.textContent = contador;
            fila.appendChild(celda);
        }

        tabla.appendChild(fila);
    }
    document.body.appendChild(tabla);

}

const esprimo = (numero) =>{

    let contadorPrimo = 0;

    for (let i = 1; i<= numero; i++){
        if(numero % i == 0){
            contadorPrimo++;
        }
    }

    if (contadorPrimo === 2){
        return true;
    }else{
        return false;
    }

}
export {insertarTabla};