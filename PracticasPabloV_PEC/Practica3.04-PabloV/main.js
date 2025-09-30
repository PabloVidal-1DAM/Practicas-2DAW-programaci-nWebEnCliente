"use strict";
import {mezclandoObjetos} from "./ejercicio1.js";
import {filtrandoObjetos,generarNumAleatorio} from "./ejercicio2.js";
import {usuarios, aniadirUsuario,mayoresDeEdad,correoYahoo, filtradoMultiple, valorVacio} from "./Ejercicio3.js";

//Ejercicio 1:
let array = ["Pablo", "Miguel", "Javier", "Juanfran", "María José"];
console.log(mezclandoObjetos(array));

//Ejercicio2:
console.log(filtrandoObjetos());

//Ejercicio3:
const nuevoUsuario = {
        nombre: "Pablo",
        preferencias: { tema: "claro", idioma: "español", edad: 20 },
        contacto: {
            direccion: {
                calle: "Calle falsa 30, 2Y",
                localidad: "Monforte del Cid",
                pais: "España",
            },
            correoelectronico: "correofalso@yahoo.com",
            telefono: "1744564576",
        }
}

let usuariosNuevos = aniadirUsuario(nuevoUsuario);
console.log(usuariosNuevos);
console.log(mayoresDeEdad(usuariosNuevos));
console.log(correoYahoo(usuariosNuevos));
console.log(filtradoMultiple(usuariosNuevos));
console.log(valorVacio(usuariosNuevos));
