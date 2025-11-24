import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Errores from "../Errores.jsx";
import Discos from "../Discos.jsx";
import "./RellenarDatos.css";

const RellenarDatos = ({
  listaDiscos,
  setListaDiscos,
  discosFiltrados,
  setDiscosFiltrados,
  discoBorrado,
  setDiscoBorrado,
}) => {
  const navegar = useNavigate();

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

  // RellenarDatos.jsx
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
    } else if (name === "fechaPublicacion") {
      if (!value.length) {
        erroresElemento = [
          ...erroresElemento,
          `El campo ${name} debe tener un valor.`,
        ];
      }
      const expresion = /^\d{4}$/;
      if (!expresion.test(value)) {
        erroresElemento = [
          ...erroresElemento,
          "La fecha solo debe disponer de cuatro caracteres numéricos",
        ];
      }
    }// SIGO MAÑANA A PARTIR DE AQUÍ O SI NO ME VOY A VOLAR LA CABEZA JAJAJJAJJSJAJSJAJSJAJSJAJJSJAJSJAJSJASJJSJAJJAJSJAJJASJAJAJSAJJASJASJJSJJAJSJASJAJSJJJJASASJJSJSAJSAASJ

    return erroresElemento;
  };

  // RellenarDatos.jsx

  const validarFormulario = (evento) => {
    // Usamos document.forms.formularioDiscos para un acceso más robusto al formulario
    const formulario = document.forms.formularioDiscos;
    let erroresListado = [];

    // Definimos qué campos vamos a validar OBLIGATORIAMENTE
    const camposObligatorios = ["nombre", "grupo"];

    camposObligatorios.forEach((name) => {
      const elemento = formulario.elements[name];

      if (elemento) {
        // Llama a validarDato (que sabemos que devuelve un array [])
        let erroresElemento = validarDato(elemento);

        // Aplicamos las clases
        if (erroresElemento.length > 0) {
          elemento.classList.add("error");
          erroresListado = [...erroresListado, ...erroresElemento];
        } else {
          elemento.classList.remove("error");
        }
      }
    });

    setError(erroresListado);
    return erroresListado.length === 0;
  };

  const filtrarDisco = (formulario, listadoDiscos) => {
    let errores = [];

    if (formulario.filtrar.value === "" || listaDiscos.length === 0) {
      errores = [
        ...errores,
        `No hay o no se ha puesto información para filtrar.`,
      ];
      setError(errores);
    } else {
      const discoFiltrado = listadoDiscos.filter((disco, indice, array) => {
        return disco.nombre === formulario.filtrar.value;
      });

      if (discoFiltrado.length === 0) {
        errores = [
          ...errores,
          "No se ha encontrado ningún disco con ese nombre.",
        ];
        setError(errores);
      } else {
        setError([]); // limpiar errores
      }

      setDiscosFiltrados(discoFiltrado);
    }
  };

  const borrarDato = (listadoDiscos) => {
    // NO SE COMO IMPLEMENTAR ESTO
  };

  const borrarDisco = (formulario, ListadoDiscos) => {};

  return (
    <div>
      <form
        id="formulario"
        name="formularioDiscos"
        className="estiloFormulario"
      >
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
        <div className="acciones">
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
          <input
            type="button"
            value="Filtrar"
            onClick={(evento) => {
              const formulario = document.forms.formularioDiscos;
              filtrarDisco(formulario, listaDiscos);
              navegar("/filtrado");
            }}
          />
          <input
            type="button"
            value="Borrar"
            onClick={(evento) => {
              const formulario = document.forms.formularioDiscos;
              borrarDisco(listaDiscos, formulario);
            }}
          />
        </div>
      </form>
      <br />
      <br />

      <div>{<div>{error.length > 0 && <Errores errores={error} />}</div>}</div>
    </div>
  );
};

export default RellenarDatos;
