import React from "react";
import useSesion from "./hooks/useSesion";
import "./Formulario.css";

const Registrarse = () => {
  const { error, setError, actualizarDato, registrarse } = useSesion();

  return (
    <div className="formulario">
      <h2>Crea un nuevo usuario</h2>

      <label htmlFor="email">Correo: </label>
      <input
        type="email"
        name="email"
        id="email"
        placeholder="inserta tu correo"
        onChange={(evento) => {
          actualizarDato(evento);
        }}
      />
      <br />
      <br />

      <label htmlFor="email">Contraseña: </label>
      <input
        type="password"
        name="password"
        id="password"
        placeholder="inserta tu contraseña"
        onChange={(evento) => {
          actualizarDato(evento);
        }}
      />
      <br />
      <br />

      <label htmlFor="email">Nombre: </label>
      <input
        type="text"
        name="name"
        id="name"
        placeholder="Inserta tu nombre de usuario"
        onChange={(evento) => {
          actualizarDato(evento);
        }}
      />
      <br />
      <br />

      <button
        className="botonSesion"
        onClick={(evento) => {
          registrarse();
        }}
      >
        Enviar
      </button>

      <p>{error}</p>
    </div>
  );
};

export default Registrarse;
