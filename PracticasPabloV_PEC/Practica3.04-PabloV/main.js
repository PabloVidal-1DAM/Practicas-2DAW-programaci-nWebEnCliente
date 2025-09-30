"use strict";
import {mezclandoObjetos} from "./ejercicio1.js";
import {filtrandoObjetos,generarNumAleatorio} from "./ejercicio2.js";
import {usuarios, aniadirUsuario,mayoresDeEdad,correoYahoo, filtradoMultiple, valorVacio, usuariosApellido, nuevaDireccion} from "./Ejercicio3.js";

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

// he optado por usar JSON.stringify ya que haberlos recorrido cada uno 
// con un forEach habría ocupado mucho más en consola y sería menos limpio.

// a JSON.stringify() se le debe de pasar el objeto JSON a pasar a string, además de una función llamada "replacer"
// que se suele dejar en null y por último la sangría que mostrará por consola (espaciado entre objetos).
console.log("-----* 3.1: Objeto con Nuevos Usuarios *-----");
console.log(JSON.stringify(usuariosNuevos, null, 2)); 

console.log("-----* 3.2: Usuarios Mayores de Edad *-----");
console.log(JSON.stringify(mayoresDeEdad(usuariosNuevos), null, 2));

console.log("-----* 3.3: Usuarios que tienen correo Yahoo *-----");
console.log(JSON.stringify(correoYahoo(usuariosNuevos), null, 2));

console.log("-----* 3.4: Filtrado Múltiple *-----");
console.log(JSON.stringify(filtradoMultiple(usuariosNuevos), null, 2));

console.log("-----* 3.5: Usuarios con Datos Vacíos *-----");
console.log(JSON.stringify(valorVacio(usuariosNuevos), null, 2));

console.log("-----* 3.6: Usuarios con nuevo valor: Apellidos *-----");
console.log(JSON.stringify(usuariosApellido(usuariosNuevos), null, 2));

console.log("-----* 3.7: Usuarios con nuevo valor en dirección: Código *-----");
console.log(JSON.stringify(nuevaDireccion(usuariosNuevos), null, 2));
