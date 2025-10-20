"use strict";
const censurar = () => {

  let cuerpo = document.body;
  // Se recorre el cuerpo de la página web y en caso de encontrar texto que contenga 'sexo', se reemplaza con 'Cotenido Bloqueado'.
  for (let i = 0; i< cuerpo.childNodes.length; i++){
    if (cuerpo.childNodes[i].textContent.includes("sexo")){ // Para detectar el texto se usa .includes().
        cuerpo.innerHTML = cuerpo.innerHTML.replace(/sexo/gi,"<span id='cochino'>Contenido Bloqueado</span>"); // Y se reemplaza con .replace(), "gi" es usado para que no distinguir entre mayusc y minusc.
    }
  }

};
export {censurar};