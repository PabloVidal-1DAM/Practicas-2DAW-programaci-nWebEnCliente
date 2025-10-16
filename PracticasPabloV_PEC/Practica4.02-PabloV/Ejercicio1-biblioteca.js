"use strict";
const censurar = () => {

  let cuerpo = document.body;

  for (let i = 0; i< cuerpo.childNodes.length; i++){
    if (cuerpo.childNodes[i].textContent.includes("sexo")){
        cuerpo.innerHTML = cuerpo.innerHTML.replace(/sexo/gi,"<span id='cochino'>Contenido Bloqueado</span>");
    }
  }

};
export {censurar};