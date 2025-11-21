import React from 'react'

const RellenarDatos = () => {
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
          /><br /><br />

          <label htmlFor="caratula">Carátula del disco: </label>
          <input
            type="url"
            id="caratula"
            name="caratula"
            placeholder="Introduce la URL de la caratula del disco"
          /><br /><br />

          <label htmlFor="grupo">Intérprete del disco: </label>
          <input
            type="text"
            id="grupo"
            name="grupo"
            placeholder="Introduce el grupo músical o intérprete del disco"
          /><br /><br />

          <label htmlFor="fechaPublicacion">fecha de publicación: </label>
          <input
            type="number"
            id="fechaPublicacion"
            name="fechaPublicacion"
            placeholder="Introduce el año de publicación"
          /><br /><br />
        </fieldset>
        <br /><br />

        <fieldset id="generos">
          <legend>Género del disco</legend>
          <input type="radio" id="pop" name="opcionesGenero" value="pop" />
          <label htmlFor="pop">Pop</label>

          <input
            type="radio"
            id="contemporaneo"
            name="opcionesGenero"
            value="contemporaneo"
          />
          <label htmlFor="contemporaneo">Contemporáneo</label>

          <input
            type="radio"
            id="electronica"
            name="opcionesGenero"
            value="electronica"
          />
          <label htmlFor="electronica">Electrónica</label>

          <input type="radio" id="rap" name="opcionesGenero" value="rap" />
          <label for="rap">Rap</label>
        </fieldset>
        <br /><br />

        <fieldset id="campoCodigo">
          <legend>Código del disco</legend>
          <label htmlFor="codigo">Código ISRC: </label>
          <input
            type="text"
            id="codigo"
            name="codigo"
            placeholder="Introduce el código"
          />
        </fieldset>
        <br /><br />

        <fieldset>
          <legend>Prestación</legend>
          <br />
          <label htmlFor="prestado">¿Está prestado?: </label>
          <input type="checkbox" id="prestado" name="prestado" />
        </fieldset>
        <br /><br />

        <fieldset>
          <legend>Filtrar</legend>
          <br />
          <label htmlFor="filtrar">Filtrar:</label>
          <input type="text" id="filtrar" name="filtrar" placeholder="Filtrar por NOMBRE"/>
        </fieldset>
        <br /><br />
      </form>
    </div>
  )
}

export default RellenarDatos
