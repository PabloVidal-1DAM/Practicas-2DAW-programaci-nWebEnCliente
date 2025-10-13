const filtrar2DAW = (discentes) => {
  return discentes.filter((valor) => valor.curso === "2DAW");
};

const filtrarPrimerCurso = (discentes) => {
  return discentes.filter((valor) => valor.curso.includes("1"));
};

const filtrarDAW = (discentes) => {
  return discentes.filter((valor) => valor.curso.includes("DAW"));
};

// Ordenar por apellidos (ascendente o descendente), usando el estado de ordenación que es pasado como parámetro.
const ordenarPorApellidos = (discentes, ascendente = true) => {
  return discentes.sort((a, b) => {
    if (a.apellidos < b.apellidos) return ascendente ? -1 : 1; // -1 haría que a fuese antes que b, mientras que 1 hace que a vaya después de b.
    if (a.apellidos > b.apellidos) return ascendente ? 1 : -1;
    return 0;
  });
};

// Eliminar un discente por su discente.id.
const eliminarPorId = (discentes, id) => {
  return discentes.filter((valor) => valor.id !== id);
};

export {
  filtrar2DAW,
  filtrarPrimerCurso,
  filtrarDAW,
  ordenarPorApellidos,
  eliminarPorId
};