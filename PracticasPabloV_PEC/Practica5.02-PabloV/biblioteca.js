

  const ocultar = (array) => {
    for (let i = 0; i < array.length; i++) {
      array.item(i).classList.add("oculto");
    }
  };

  const mostrar = (array) => {
    elementos;
  };

  const AnyadirEventos = (array) => {
    for (let i = 0; i < array.length; i++) {
      if (i % 2 !== 0) {
        array[i].addEventListener("click", mostrar, false);
      }
    }
  };
  
 export{ocultar, mostrar, AnyadirEventos};

