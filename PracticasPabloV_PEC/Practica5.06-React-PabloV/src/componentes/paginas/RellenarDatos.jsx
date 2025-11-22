import React, { useState } from "react";

const RellenarDatos = () => {
  const valoresIniciales = {
    nombre: "",
    caratula: "",
    grupo: "",
    fechaPublicacion: "",
    genero: "",
    codigo: "",
    prestado: "",
  };

  const errores = [];
  const [disco, setDisco] = useState(valoresIniciales);
  const [listaDiscos, setListaDiscos] = useState([]);
  const [error, setError] = useState(errores);
  const [prestado, setPrestado] = useState(false);

  const actualizarDatos = (evento) => {
    const { name, value } = evento.target;
    setDisco({ ...disco, [name]: value });
  };

  return (
    <div>
      <form id="formulario" name="formularioDiscos">
        <fieldset id="datosDiscos">
          <legend>Datos del disco</legend>
          <label htmlFor="nombre">Nombre del disco: </label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            placeholder="Introduce el nombre del disco"
            value={disco.nombre}
            onChange={(evento) => {
              actualizarDatos(evento);
            }}
          />
          <br />
          <br />

          <label htmlFor="caratula">Carátula del disco: </label>
          <input
            type="url"
            id="caratula"
            name="caratula"
            placeholder="Introduce la URL de la caratula del disco"
            value={disco.caratula}
            onChange={(evento) => {
              actualizarDatos(evento);
            }}
          />
          <br />
          <br />

          <label htmlFor="grupo">Intérprete del disco: </label>
          <input
            type="text"
            id="grupo"
            name="grupo"
            placeholder="Introduce el grupo músical o intérprete del disco"
            value={disco.grupo}
            onChange={(evento) => {
              actualizarDatos(evento);
            }}
          />
          <br />
          <br />

          <label htmlFor="fechaPublicacion">fecha de publicación: </label>
          <input
            type="number"
            id="fechaPublicacion"
            name="fechaPublicacion"
            placeholder="Introduce el año de publicación"
            value={disco.fechaPublicacion}
            onChange={(evento) => {
              actualizarDatos(evento);
            }}
          />
          <br />
          <br />
        </fieldset>
        <br />
        <br />

        <fieldset id="generos">
          <legend>Género del disco</legend>
          <input 
            type="radio" 
            id="pop" 
            name="genero" 
            value="pop"
            checked={disco.genero === "pop"}
            onChange={(evento) =>{
              actualizarDatos(evento);
            }}
          />
          <label htmlFor="pop">Pop</label>

          <input
            type="radio"
            id="contemporaneo"
            name="genero"
            value="contemporaneo"
            checked={disco.genero === "contemporaneo"}
            onChange={(evento) => {
              actualizarDatos(evento);
            }}
          />
          <label htmlFor="contemporaneo">Contemporáneo</label>

          <input
            type="radio"
            id="electronica"
            name="genero"
            value="electronica"
            checked={disco.genero === "electronica"}
            onChange={(evento) => {
              actualizarDatos(evento);
            }}
          />
          <label htmlFor="electronica">Electrónica</label>

          <input
            type="radio"
            id="rap"
            name="genero"
            value="rap"
            checked={disco.genero === "rap"}
            onChange={(evento) => {
              actualizarDatos(evento);
            }}
          />

          <label htmlFor="rap">Rap</label>
        </fieldset>
        <br />
        <br />

        <fieldset id="campoCodigo">
          <legend>Código del disco</legend>
          <label htmlFor="codigo">Código ISRC: </label>
          <input
            type="text"
            id="codigo"
            name="codigo"
            placeholder="Introduce el código"
            value={disco.codigo}
            onChange={(evento) => {
              actualizarDatos(evento);
            }}
          />
        </fieldset>
        <br />
        <br />

        <fieldset>
          <legend>Prestación</legend>
          <br />
          <label htmlFor="prestado">¿Está prestado?: </label>
          <input
            type="checkbox"
            id="prestado"
            name="prestado"
            checked={disco.prestado}
            onChange={(evento) => {
              actualizarDatos(evento);
            }}
          />
        </fieldset>
        <br />
        <br />

        <fieldset>
          <legend>Filtrar</legend>
          <br />
          <label htmlFor="filtrar">Filtrar:</label>
          <input
            type="text"
            id="filtrar"
            name="filtrar"
            placeholder="Filtrar por NOMBRE"
          />
        </fieldset>
        <br />
        <br />
        <input
          type="button"
          value="Enviar datos"
          onClick={(evento) => {
            setListaDiscos([...listaDiscos, disco]);
          }}
        />
      </form>
      <br />
      <br />
      <ul>
        {listaDiscos.map((disco, i) => {
          return (
            <div key={i} id="discos" className="discos_css">
              <li><p>Nombre: <strong>{disco.nombre}</strong></p></li>
              <li><p>Carátula: <strong>{disco.caratula}</strong></p></li>
              <li><p>Grupo: <strong>{disco.grupo}</strong></p></li>
              <li><p>Fecha de publicación: <strong>{disco.fechaPublicacion}</strong></p></li>
              <li><p>Género: <strong>{disco.genero}</strong></p></li>
              <li><p>Código ISRC: <strong>{disco.codigo}</strong></p></li>
              <li><p>Prestado: <strong>{disco.prestado ? "Sí" : "No"}</strong></p></li>
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default RellenarDatos;
