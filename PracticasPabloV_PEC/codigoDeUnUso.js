const censurar = () => {

  let cuerpo = document.getElementsByTagName("body");

  for (let i = 0; i< cuerpo.length; i++){
    if (cuerpo[i].textContent.includes("sexo")){
        cuerpo[i].textContent.replace("/sexo/gi", "Contenido Bloqueado");
    }
  }

  for (let i = 0; i< cuerpo.length; i++){
    let cuerpoNuevo = document.createElement("p");
    cuerpoNuevo.innerHTML = cuerpo[i].textContent;
    cuerpo.appendChild(cuerpoNuevo);
  }

};
