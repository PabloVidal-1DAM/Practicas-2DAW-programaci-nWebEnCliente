import React from "react";
import "./Formulario.css";
import useAuth from "./hooks/useAuth";

const Registrarse = () => {
  const { error, setError, actualizarDato, registrarUsuario, datosSesion } = useAuth();

  return (
    <div className="formulario">
      <h2>Crea un nuevo usuario</h2>

      <label htmlFor="email">Correo: </label>
      <input
        type="email"
        name="email"
        id="email"
        placeholder="inserta tu correo"
        value={datosSesion.email}
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
        value={datosSesion.password}
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
        value={datosSesion.name}
        onChange={(evento) => {
          actualizarDato(evento);
        }}
      />
      <br />
      <br />

      <button
        className="botonSesion"
        onClick={(evento) => {
          registrarUsuario();
        }}
      >
        Enviar
      </button>

      <p>{error}</p>
    </div>
  );
};

export default Registrarse;
