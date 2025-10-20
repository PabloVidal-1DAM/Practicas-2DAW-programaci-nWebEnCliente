"use strict";

const insertarTabla = () =>{
    // Se crea el elemento de la tabla
    let tabla = document.createElement("table");
    let contador = 0;
    for (let i = 0; i< 10; i++){
        // Una tabla necesita de filas y columnas, por lo que se usa un doble bucle para crearlas.
        // El primer for representa a las filas, y el segundo a las columnas.
        let fila = document.createElement("tr");

        for(let j=0; j< 10; j++){
            contador++;
            let celda = document.createElement("td");

            // Se llama a una función externa para comprobar si es primo, 1 función, 1 tarea.
            // En caso de ser primo, añadirle el id "numerosPrimos".
            if(esprimo(contador)){
                setTimeout(() =>{celda.classList.add("numerosPrimos")}, 2000);
            }
            // El contenido de la tabla será una serie de numeros que incrementa de 1 en 1.
            celda.textContent = contador;

            // A la fila se le añade la columna.
            fila.appendChild(celda);
        }
        // Una vez la fila contiene la columna, se añade a la Tabla.
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