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
        <Link to={"/listaCompra"} className="botonNav">
          Ver Listas de la Compra
        </Link>
        {/* Si el usuario no inicia sesión, solo puede ver los productos de la tabla, pero NO añadir nuevos. */}
        {sesionIniciada && (
          <>
            <Link to={"/productos/añadir"} className="botonNav">
              Añadir Producto
            </Link>
            <Link to={"/listaCompra/añadir"} className="botonNav">
              Añadir Lista de la Compra
            </Link>
          </>
        )}
      </nav>
    </>
  );
};

export default Menu;
