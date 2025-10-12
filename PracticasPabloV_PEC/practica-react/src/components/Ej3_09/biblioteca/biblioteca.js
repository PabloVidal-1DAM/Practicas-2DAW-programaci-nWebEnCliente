// Filtrar solo los alumnos de 2DAW
const filtrar2DAW = (discentes) => {
  return discentes.filter((valor) => valor.curso === "2DAW");
};

// Filtrar solo alumnos de primer curso
const filtrarPrimerCurso = (discentes) => {
  return discentes.filter((valor) => valor.curso.includes("1"));
};

// Filtrar solo los de DAW
const filtrarDAW = (discentes) => {
  return discentes.filter((valor) => valor.curso.includes("DAW"));
};

// Ordenar por apellidos (ascendente o descendente)
const ordenarPorApellidos = (discentes, ascendente = true) => {
  return [...discentes].sort((a, b) => {
    if (a.apellidos < b.apellidos) return ascendente ? -1 : 1;
    if (a.apellidos > b.apellidos) return ascendente ? 1 : -1;
    return 0;
  });
};

// Eliminar un discente por id
const eliminarPorId = (discentes, id) => {
  return discentes.filter((valor) => valor.id !== id);
};

// Reiniciar lista de discentes al estado original
const reiniciarDiscentes = (datosOriginales) => {
  return datosOriginales;
};

export {
  filtrar2DAW,
  filtrarPrimerCurso,
  filtrarDAW,
  ordenarPorApellidos,
  eliminarPorId,
  reiniciarDiscentes,
};