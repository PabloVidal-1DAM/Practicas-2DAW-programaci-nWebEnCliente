"use strict";
// Ejercicio 3: Recorriendo Objetos.

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
            let media = ((this.notas.primera + this.notas.segunda + this.notas.tercera) / 3)
            return(media.toLocaleString("es-ES",{style: "decimal"}));
        },
        imprimirAficiones: function imprimirAficiones(){
            this.aficiones.forEach((aficion,indice,array) =>{
                console.log("Afición "+indice +": "+aficion);
            });
            
        },
        imprimirInforme: function imprimirInforme(){
            console.log("-/*******Informe del alumno: "+this.nombre + "*******/-");
            console.log("ID: " + this.id);
            console.log("Nombre: " + this.nombre + " " + this.apellidos);
            console.log("Notas:");
            console.log("Primera: " + this.notas.primera.toLocaleString("es-ES"));
            console.log("Segunda: " + this.notas.segunda.toLocaleString("es-ES"));
            console.log("Tercera: " + this.notas.tercera.toLocaleString("es-ES"));
            console.log("Media: " + this.calcularMedia());
            console.log("Aficiones:");
            this.imprimirAficiones();
            console.log("-/****************************************/-")
        }
    }
    return(discente);
}
export {crearJSON};
