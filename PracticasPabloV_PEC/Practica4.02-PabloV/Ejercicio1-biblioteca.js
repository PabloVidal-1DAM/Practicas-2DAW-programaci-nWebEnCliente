"use strict";
const censurar = () => {

  let cuerpo = document.body;

  console.log(cuerpo);

  for (let i = 0; i< cuerpo.childNodes.length; i++){
    if (cuerpo.childNodes[i].textContent.includes("sexo")){
        cuerpo.childNodes[i].textContent = cuerpo.childNodes[i].textContent.replace(/sexo/gi, "Contenido Bloqueado");
    }
  }

  for (let i = 0; i< cuerpo.childNodes.length; i++){
    if (cuerpo.childNodes[i].tagName !== "P" && cuerpo.childNodes[i].tagName !== "SCRIPT" ){
        let cuerpoNuevo = document.createElement("p");
        cuerpoNuevo.innerHTML = cuerpo.childNodes[i].textContent;
        cuerpo.appendChild(cuerpoNuevo);
    }
  }

};
export {censurar};