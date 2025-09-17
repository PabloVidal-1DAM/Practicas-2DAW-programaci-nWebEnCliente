"use strict";
// importación de la funcion del ej de la biblioteca
import {calcularPuntuacionMedia, mostrarMejorMedia} from "./biblioteca.js";

let equipoPablo = [1,3,5,6,4];
let equipoJuan = [7,2,4,5,6];
let equipoMaria = [7,8,7,9,6];

let mediaPablo = calcularPuntuacionMedia(equipoPablo);
let mediaJuan = calcularPuntuacionMedia(equipoJuan);
let mediaMaria = calcularPuntuacionMedia(equipoMaria);

mostrarMejorMedia(equipoPablo, equipoJuan, equipoMaria);

