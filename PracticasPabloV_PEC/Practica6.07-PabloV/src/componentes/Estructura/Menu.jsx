import React from "react";
import { Link } from "react-router-dom";
import "./Menu.css";
import useAuth from "../hooks/useAuth";
const Menu = () => {
  const { sesionIniciada } = useAuth();
  return (
    <>
      <nav>
        <Link to={"/"} className="botonNav">
          Inicio
        </Link>
        <Link to={"/productos"} className="botonNav">
          Ver Productos
        </Link>
        {/* Si el usuario no inicia sesión, solo puede ver los productos de la tabla, pero NO añadir nuevos. */}
        {sesionIniciada && (
          <>
            <Link to={"/listaCompra"} className="botonNav">
              Ver Listas de la Compra
            </Link>
            <Link to={"/productos/añadir"} className="botonNav">
              Añadir Producto
            </Link>
            <Link to={"/listaCompra/añadir"} className="botonNav">
              Añadir Lista de la Compra
            </Link>
            <Link to={"/usuarios"} className="botonNav">
              Ver roles de Usuarios
            </Link>
          </>
        )}
      </nav>
    </>
  );
};

export default Menu;
