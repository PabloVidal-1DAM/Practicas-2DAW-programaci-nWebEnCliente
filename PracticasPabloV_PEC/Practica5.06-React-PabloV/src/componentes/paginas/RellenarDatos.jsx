import React, { useState } from "react";
import Errores from "../Errores.jsx";
import Discos from "../Discos.jsx";

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

  const [disco, setDisco] = useState(valoresIniciales);
  const [listaDiscos, setListaDiscos] = useState([]);

  const erroresIniciales = [];
  const [error, setError] = useState(erroresIniciales);

  const [prestado, setPrestado] = useState(false);

const actualizarDatos = (evento) => {
  const { name, type, value, checked } = evento.target;
  setDisco({
    ...disco,
    [name]: type === "checkbox" ? checked : value,
  });
};


  const validarDato = (elemento) => {
    const { name, value } = elemento;
    let erroresElemento = [];

    if (name === "nombre" || name === "grupo") {
      if (!value.length) {
        erroresElemento = [
          ...erroresElemento,
          `El campo ${name} debe tener un valor.`,
        ];
      }
      const expresion = /^.{5,}$/;
      if (!expresion.test(value)) {
        erroresElemento = [
          ...erroresElemento,
          `Los campos nombre y grupo deben tener al menos 5 caracteres y son obligatorios.`,
        ];
      }
    }

    return erroresElemento;
  };

  const validarFormulario = (evento) => {
    const formulario = evento.target.parentNode;
    let erroresListado = [];

    for (let i = 0; i < formulario.elements.length - 1; i++) {
      let erroresElemento = validarDato(formulario.elements[i]);

      erroresElemento.length
        ? formulario.elements[i].classList.add("error")
        : formulario.elements[i].classList.remove("error");

      erroresListado = [...erroresListado, ...erroresElemento];
    }

    setError(erroresListado);
    return erroresListado.length === 0;
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
            onChange={(evento) => {
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
            if (validarFormulario(evento)) {
              console.log("Datos corectos");
              setListaDiscos([...listaDiscos, disco]);
            } else {
              console.log("Algo ha fallado");
            }
          }}
        />
      </form>
      <br />
      <br />
      <Discos listaDiscos={listaDiscos}/><br/><br/>
      <div>
        {<div>{error.length > 0 && <Errores errores={error} />}</div>}
      </div>
    </div>
  );
};

export default RellenarDatos;
