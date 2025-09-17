"use strict";
function calcularPuntuacionMedia(equipo){
    let media = 0;

    for (let i = 0; i< equipo.length; i++){
        media += equipo[i];
    }
        media /= equipo.length

    return media;
}

function mostrarMejorMedia(media1,media2, media3){

    let ganadorMejorMedia = "Nadie";

    if (media1 > media2 && media1 > media3){
         console.log("La media mayor es: " + media1);
         ganadorMejorMedia = "equipoPablo";
    }else if (media2 > media1 && media2 > media3){
        console.log("La media mayor es: " + media2);
        ganadorMejorMedia = "equipoJuan";
    }else{
        console.log("La media mayor es: " +media3);
        ganadorMejorMedia = "equipoMaria";
    }

       

    if (media1 === media2){
        console.log("Existe un empate en las medias")
    }

    console.log("El ganador de la mejor media es:  " + ganadorMejorMedia)

}
export {calcularPuntuacionMedia, mostrarMejorMedia};