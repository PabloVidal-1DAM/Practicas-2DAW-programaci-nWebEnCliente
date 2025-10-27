import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import peliculas_json from "../../../json/Peliculas.json";

const PeliculaDetalle = (props) => {

  const {id} = useParams();

  const navegar = useNavigate();

  const peliculasFiltradas = peliculas_json.Peliculas.filter((pelicula,indice,array) =>{
    return(
      pelicula.id === parseInt(id)
    )
  })
  

  return (
    <div>
      <h2>{peliculasFiltradas[0].titulo}</h2>
      <img src={peliculasFiltradas[0].cartela} />
      <p>Año: {peliculasFiltradas[0].anyo}</p>
      <p>Director: {peliculasFiltradas[0].direccion}</p>
      <p>Descripción: {peliculasFiltradas[0].descripcion}</p>

      <button onClick={()=>navegar("/peliculas")}>
        Ocultar detalle
      </button>
    </div>
  );
};

export default PeliculaDetalle;
