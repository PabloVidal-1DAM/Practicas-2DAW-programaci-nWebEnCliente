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
  // Devuelve una copia del array usuarios con el cambio del nuevo objeto.
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
      !valor.preferencias ||
      !valor.contacto ||
      !valor.correoelectronico ||
      !valor.telefono 
    );
  });
  return arrayDatoNull;
}

export {usuarios,aniadirUsuario,mayoresDeEdad,correoYahoo, filtradoMultiple, valorVacio};
