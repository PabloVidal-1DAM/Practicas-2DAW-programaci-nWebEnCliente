import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import Errores from "../Errores.jsx";
import Discos from "../Discos.jsx";
import {contextoDiscos} from "../../componentes/Proveedor.jsx";
import "./RellenarDatos.css";

// Elementos del prop de estados externos que gastará
// que son: La lista normal, la lista Filtrada y la lista con el elemento Borrado
const RellenarDatos = () => {
  const {
    listaDiscos,
    setListaDiscos,
    discosFiltrados,
    setDiscosFiltrados,
    discoBorrado,
    setDiscoBorrado,
  } = useContext(contextoDiscos);

  const navegar = useNavigate();
  const formulario = document.forms.formularioDiscos;

  const valoresIniciales = {
    nombre: "",
    caratula: "",
    grupo: "",
    fechaPublicacion: "",
    genero: "",
    codigo: "",
    prestado: "",
  };

  // Estados internos que gastará este componente.
  const [disco, setDisco] = useState(valoresIniciales);

  const erroresIniciales = [];
  const [error, setError] = useState(erroresIniciales);

  const [prestado, setPrestado] = useState(false);

  // Se usa la desestructuración del target para ahorrar fatiga mental y entender mejor.
  // Se añade al estado "disco", la clave y el valor decada campo.
  const actualizarDatos = (evento) => {
    const { name, type, value, checked } = evento.target;
    setDisco({
      ...disco,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  // Se valida cada parte del objeto JSON de discos bajo expresiones distintas dependiendo de que campo del objeto sea.
  const validarDato = (elemento) => {
    const { name, value } = elemento;
    // Todos los posibles errores que surgan irán aquí.
    let erroresElemento = [];

    if (name === "nombre" || name === "grupo") {
      const expresion = /^.{5,}$/;
      if (!expresion.test(value)) {
        erroresElemento = [
          ...erroresElemento,
          `Los campos nombre y grupo deben tener al menos 5 caracteres y son obligatorios.`,
        ];
      }
    } else if (name === "fechaPublicacion") {
      const expresion = /^\d{4}$/;
      if (!expresion.test(value)) {
        erroresElemento = [
          ...erroresElemento,
          "La fecha solo debe disponer de cuatro caracteres numéricos",
        ];
      }
    } else if (name === "genero") {
      if (!value.length) {
        erroresElemento = [...erroresElemento, "Debes seleccionar un género."];
      }
    } else if (name === "codigo") {
      const expresion = /^ES-\d{3}[A-Z]{2}$/;
      if (!expresion.test(value)) {
        erroresElemento = [
          ...erroresElemento,
          `Se debe seguir el formato ES-001AA donde 001 es el número de la estantería y AA la balda (combinación de dos letras mayúsculas).`,
        ];
      }
    }

    return erroresElemento;
  };

  const validarFormulario = (evento) => {
    let erroresListado = [];

    // En este aray se indican aquellos campos que sob obligatorios en el formnulario.
    const camposObligatorios = [
      "nombre",
      "grupo",
      "fechaPublicacion",
      "codigo",
    ];

    // Se recorre cada campo obligatorio para validarlos en la funcion "validarDato()";
    camposObligatorios.forEach((name) => {
      const elemento = formulario.elements[name];

      if (elemento) {
        // Se llama a validarDato que devuelve un array [].
        let erroresElemento = validarDato(elemento);

        // Se Aplican clases de estilo al elemento en caso de existir errores.
        if (erroresElemento.length > 0) {
          elemento.classList.add("error");
          erroresListado = [...erroresListado, ...erroresElemento];
        } else {
          elemento.classList.remove("error");
        }
      }
    });

    //En los radio button, como no es un input normal, sino una colección,
    // lo valido manualmente.
    const genero = formulario.elements["genero"].value;

    // Si no se selecciona ningún genero, nuevo error, debe de haber 1 seleccionado.
    if (!genero) {
      erroresListado = [...erroresListado, "Debes seleccionar un género."];
    }

    setError(erroresListado);
    // Devolverá true si el array de errores no contiene ningúno.
    return erroresListado.length === 0;
  };

  // Para poder filtrar, se pasa el formulario para acceder al input text que contiene el valor a filtrar y
  // el estado "listadoDiscos" que contiene todos los discos guardados en ese momento.
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

      setDiscosFiltrados(discoFiltrado);
    }
  };

  // Ya que el componente de la ruta /mostrar gasta la listaDiscos original, simplemente se navega a ese componente para enseñarlo.
  const borrarDisco = (formulario, ListadoDiscos) => {
    navegar("/mostrar");
  };

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
            // Cada vez que cambie el valor, se llama a "actualizarDatos" para almacenar los datos del disco en el estado "disco"
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
              // Si "validarFormulario" no devuelve errores, pasa la validación y se guarda en el estado "listaDiscos".
              if (validarFormulario(evento)) {
                setListaDiscos([...listaDiscos, disco]);
                setDisco(valoresIniciales);
                setError([]);
              }
            }}
          />
          <input
            type="button"
            value="Filtrar"
            onClick={(evento) => {
              const formulario = document.forms.formularioDiscos;
              filtrarDisco(formulario, listaDiscos);
              // Al hacer click y filtrar el disco, se lleva automáticamente al componente <Disco> para que el usuario vea que se ha filtrado.
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
      {/*Si el estado interno "error", contiene errores, entonces se muestra el componente "Errores.jsx"*/}
      {/*Al cual se le pasa el estado que almacena los errores para mostrarlos.*/}
      <div>{<div>{error.length > 0 && <Errores errores={error} />}</div>}</div>
    </div>
  );
};

export default RellenarDatos;
