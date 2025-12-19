import React, { createContext, useEffect, useState } from "react";
import { traerDatos } from "../biblioteca/biblioteca";

// Exportamos el objeto contexto para los hijos
export const PeliculasContext = createContext();

const PeliculasProvider = ({ children }) => {
  const [peliculas, setPeliculas] = useState([]);
  const [peliculaSeleccionada, setPeliculaSeleccionada] = useState(null);

  const cargarDatos = async () => {
    try {
      const datos = await traerDatos("https://swapi.info/api/films");
      setPeliculas(datos);
    } catch (error) {
      console.error("Error en la API:", error);
    }
  };

  // Al cargarse este componente, se traen los datos de la API automaticamente y se meten en el setter de peliculas.
  useEffect(() => {
    cargarDatos();
  }, []);

  const dataCompartida = {
    peliculas,
    setPeliculas,
    peliculaSeleccionada,
    setPeliculaSeleccionada,
  };

  return (
    <PeliculasContext.Provider value={dataCompartida}>
      {children}
    </PeliculasContext.Provider>
  );
};

export default PeliculasProvider;
