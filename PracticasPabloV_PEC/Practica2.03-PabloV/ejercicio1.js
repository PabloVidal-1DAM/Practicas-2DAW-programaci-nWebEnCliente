//Ejercicio 1: Constructor de Objetos
const crearCurso =(nombre, anio, descripcion,alumnado) =>{
    return{
        nombreCurso: nombre,
        anio: anio,
       /* if (descripcion.existeValor(descripcion)){

        }*/
        descripcion: "Por defecto",
        alumnado: [...alumnado]
    };
}

const existeValor = (valor) =>{
    if (valor.length == null){
        return true;
    }else{
        return false;
    }
}