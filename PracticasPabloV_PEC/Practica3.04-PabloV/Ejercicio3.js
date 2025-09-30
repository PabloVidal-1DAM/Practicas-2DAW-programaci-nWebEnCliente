"use strict";
const usuarios = [
  {
    nombre: "Luis",
    preferencias: { tema: "oscuro", idioma: "español", edad: 25 },
    contacto: {
      direccion: {
        calle: "Calle falsa, 666",
        localidad: "Elda",
        pais: "España",
      },
      correoelectronico: "correofalso@yahoo.com",
      telefono: "123456789",
    },
  },
  {
    nombre: "Marta",
    preferencias: { tema: "claro", idioma: "catalán", edad: 15 },
    contacto: {
      direccion: {
        calle: "Calle también falsa, 123",
        localidad: "Andorra la Vella",
        pais: "Andorra",
      },
      correoelectronico: "correoandorrano@gmail.com",
      telefono: "",
    },
  },
  {
    nombre: "Alberto",
    preferencias: { tema: "oscuro", idioma: "español", edad: 56 },
    contacto: {
      direccion: {
        calle: "Elm Street, 666",
        localidad: "Petrer",
        pais: "España",
      },
      correoelectronico: "correonulo@yahoo.com",
      telefono: "548632478",
    },
  },
  {
    nombre: "Jacinto",
    preferencias: { tema: "claro", idioma: "inglés", edad: 17 },
    contacto: {
      direccion: {
        calle: "Elm Street, 667",
        localidad: "Elda",
        pais: "España",
      },
      correoelectronico: "correofalso@gmail.com",
      telefono: "",
    },
  },
  {
    nombre: "Rigoberta",
    preferencias: { tema: "claro", idioma: "francés", edad: 34 },
    contacto: {
      direccion: {
        calle: "Calle inexistente, 6",
        localidad: "Burdeos",
        pais: "Francia",
      },
      correoelectronico: "correofalso@gmail.com",
      telefono: "232547859",
    },
  },
  {
    nombre: "Sandra",
    preferencias: { tema: "oscuro", idioma: "español", edad: 18 },
    contacto: {
      direccion: {
        calle: "Calle de mentira, s/n",
        localidad: "Petrer",
        pais: "España",
      },
      correoelectronico: "estecorreonoexiste@gmail.com",
      telefono: "452158697",
    },
  },
  {
    nombre: "Sandra",
    preferencias: { tema: "oscuro", idioma: "español", edad: 18 },
    contacto: {
      direccion: {
        calle: "Calle existente, 34",
        localidad: "Petrer",
        pais: "España",
      },
      correoelectronico: "correoinexistente@yahoo.com",
      telefono: "",
    },
  },
];

const aniadirUsuario = (usuario) =>{
  // Devuelve una copia del array de objetos "usuarios" con el cambio del nuevo objeto.
  return [...usuarios, usuario]
}

const mayoresDeEdad = (usuarios) =>{
  //filtrar aquellos del objeto "usuarios" cuya edad sea mayor o igual a 18
  let arrayMayores = usuarios.filter((valor,indice,array) =>{
    return(
      valor.preferencias.edad >=18
    );
  });
  return arrayMayores;
}

const correoYahoo = (usuarios) =>{
  let arrayYahoo = usuarios.filter((valor,indice,array) =>{
    return(
      // se hace uso de .includes() para saber si el string contiene el "@yahoo.com"
      valor.contacto.correoelectronico.includes("@yahoo.com")
    );
  });
  return arrayYahoo;
}

const filtradoMultiple = (usuarios) =>{
  let arrayFiltrado = usuarios.filter((valor,indice,array) =>{
    return(
      valor.preferencias.tema ==="claro" &&
      valor.preferencias.edad >= 18 && 
      valor.contacto.direccion.pais ==="España"
    );
  });
  return arrayFiltrado;
}

const valorVacio = (usuarios) =>{
  let arrayDatoNull = usuarios.filter((valor,indice,array) =>{
    return(
      !valor.nombre ||
      !valor.preferencias ||               // El operador "!" busca que no se deje vacío, null o undefined
      valor.preferencias.edad == null ||   
      !valor.contacto ||
      !valor.contacto.correoelectronico ||
      !valor.contacto.telefono
    );
  });
  return arrayDatoNull;
}

const usuariosApellido = (usuarios) =>{
  let nuevoArray = usuarios.map((valor,indice,array) =>{
    return{
      ...valor, apellidos: "Por defecto" // Se almacena en una nueva  copia donde se guardan todos los objetos y se añade el apellido como nuevo atributo.
    };
  });
  return nuevoArray;
}

const nuevaDireccion = (usuarios) =>{
  let nuevoArray = usuarios.map((valor,indice,array) =>{
    return{ // Lógica similar a la anterior, pero esta vez:
      ...valor, // Se hace una copia del objeto "usuario"
      contacto: {
        ...valor.contacto, // se copia todo el objeto contacto
          direccion: {
            ...valor.contacto.direccion, // se copia todo el objeto dirección
            codigo: "00000" // se añade el nuevo atributo
          }
      }
    };
  });
  return nuevoArray;
}

export {usuarios,aniadirUsuario,mayoresDeEdad,correoYahoo, filtradoMultiple, valorVacio, usuariosApellido, nuevaDireccion};
