"use strict";
window.onload = () =>{

    let feo = 2;
    const promesa = new Promise((resolver,rechazar) =>{
        setTimeout(() =>{
            if (feo % 2 == 0){
                resolver(feo);
            }else{
                rechazar(new Error("El valor es impar"));
            }
        }, 1000);
    });

    promesa
    .then((resultado) =>{
        console.log(resultado);
    })
    .catch((error) =>{
        console.log("Ocurrio un error: " +error)
    });

} // fin del window on load.