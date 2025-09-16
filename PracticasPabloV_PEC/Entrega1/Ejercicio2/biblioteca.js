"use strict";
function calcularPuntuacionMedia(equipo){
    let media = 0;

    for (let i = 0; i< equipo.length; i++){
        media += equipo[i];
    }
        media /= equipo.length

    return media;
}

function mostrarMejorMedia(media1,media2){

        console.log("La media mayor es: "(media1 > media2 ? media1 : media2))

    if (media1 === media2){
        console.log("Existe un empate en las medias")
    }

}
export {calcularPuntuacionMedia, mostrarMejorMedia};