"use strict";
// Ejercicio 3: Recorriendo Objetos

const crearJSON = () => {
    let discente = {
        id: 1,
        nombre: "Pablo",
        apellidos: "Vidal Ortega",
        aficiones: ["programar", "jugar", "dormir", "leer"],
        notas: {
            primera: 7,
            segunda: 8,
            tercera: 9.2
        },
        calcularMedia: function calcularMedia(){
            return(
                ((this.notas.primera + this.notas.segunda + this.notas.tercera) / 3)
            );
        },
        imprimirAficiones: function imprimirAficiones(){
            console.log(this.aficiones)
        }
    }
}
