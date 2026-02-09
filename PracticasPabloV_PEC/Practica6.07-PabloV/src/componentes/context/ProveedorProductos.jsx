import React, { createContext, useEffect, useState } from "react";
import useSupabase from "../hooks/useSupabase";
import useAuth from "../hooks/useAuth";

const contextoProductos = createContext();

const ProveedorProductos = ({ children }) => {
  // La lógica de consultar la b.d se carga desde el hook personalizado para no incluirla aquí, ya que no es su entorno.
  const { obtenerTodo, insertarDato, eliminarDato, editarDato, cargando } =
    useSupabase();
  const { setError, navegar } = useAuth();

  // Estados y valores que usará este componente para funcionar.
  const valorFiltroInicial = "";

  const [listaProductos, setListaProductos] = useState([]);
  const [listaFiltrada, setListaFiltrada] = useState([]);
  const [valorFiltro, setValorFiltro] = useState(valorFiltroInicial);
  const [numProductos, setNumProductos] = useState(0);
  const [precioMedio, setPrecioMedio] = useState(0);

  const datosProductoIniciales = {
    nombre: "",
    peso: "",
    precio: "",
    url: "",
    descripcion: "",
  };
  const [datosProductos, setDatosProductos] = useState(datosProductoIniciales);

  // Estados que se usarán para editar un producto en el formulario, por lo que se debe saber su id y si se está en este modo edición.
  const [idProducto, setIdProducto] = useState("");
  const [editando, setEditando] = useState(false);

  // Función para cargar los datos del producto seleccionado en el formulario para editarlo, 
  // para ello se setea el estado "datosProductos" del que está pendiente el formulario
  const cargarDatosFormulario_editar = (producto) => {
    navegar("/productos/añadir");
    setEditando(true);
    setIdProducto(producto.id);
    setDatosProductos({
      nombre: producto.nombre,
      peso: producto.peso,
      precio: producto.precio,
      url: producto.url,
      descripcion: producto.descripcion,
    });
  };

  // Función que actualiza el estado que se encarga del formulario de los productos.
  const actualizarDatosProductos = (evento) => {
    const { name, value } = evento.target;
    setDatosProductos({ ...datosProductos, [name]: value });
  };

  // Obtiene datos de la b.d y usa el estado para guardar: 1. La lista Original, 2. La lista filtrada (que se usará para aplicar los filtros.)
  const cargarProductos = async () => {
    const productos = await obtenerTodo("productos");
    setListaProductos(productos);
    sacarDatosExtra(productos);

    setListaFiltrada(productos);
  };

  // En base a lo que devuelve la b.d, se hacen calculos para sacar datos como el precio medio o la cantidad de productos que se han sacado de la b.d.
  const sacarDatosExtra = (productos) => {
    const cantidad = productos.length;
    setNumProductos(cantidad);

    if (cantidad > 0) {
      let sumaTotal = 0;

      for (let i = 0; i < cantidad; i++) {
        let precioActual = Number(productos[i].precio);
        sumaTotal = sumaTotal + precioActual;
      }

      const resultadoMedia = sumaTotal / cantidad;
      setPrecioMedio(resultadoMedia.toFixed(2));
    } else {
      setPrecioMedio(0);
    }
  };
  // En el apartado de filtrado se usa el estado de la lista filtrada para jugar con esta, una vez se termina y se resetea se vuelve al primer estado, que es la original.
  const filtrarPorNombre = (nombre) => {
    const nuevaLista = listaProductos.filter((producto) => {
      const nombreProducto = producto.nombre.toLowerCase();
      const inputUsuario = nombre.toLowerCase();

      return nombreProducto.startsWith(inputUsuario);
    });
    setListaFiltrada(nuevaLista);
  };

  const filtrarPorPrecio = (nombre) => {
    const nuevaLista = listaProductos.filter((producto) => {
      const precioProducto = Number(producto.precio);
      const inputUsuario = Number(nombre);

      return precioProducto <= inputUsuario;
    });
    setListaFiltrada(nuevaLista);
  };

  const filtrarPorPeso = (nombre) => {
    const nuevaLista = listaProductos.filter((producto) => {
      const pesoProducto = producto.peso;
      const inputUsuario = Number(nombre);

      return pesoProducto <= inputUsuario;
    });
    setListaFiltrada(nuevaLista);
  };

  // Para ordenar se usa una copia del estado de la lista filtrada para no modificar el original.
  const ordenarPorNombre = () => {
    const ArrayFiltradoCopia = [...listaFiltrada];

    ArrayFiltradoCopia.sort((a, b) => a.nombre.localeCompare(b.nombre));
    setListaFiltrada(ArrayFiltradoCopia);
  };

  const ordenarPorPrecio = () => {
    const ArrayFiltradoCopia = [...listaFiltrada];

    ArrayFiltradoCopia.sort((a, b) => Number(a.precio) - Number(b.precio));
    setListaFiltrada(ArrayFiltradoCopia);
  };

  const ordenarPorPeso = () => {
    const ArrayFiltradoCopia = [...listaFiltrada];

    ArrayFiltradoCopia.sort((a, b) => Number(b.peso) - a.peso);
    setListaFiltrada(ArrayFiltradoCopia);
  };

  const resetearFiltro = (nombre) => {
    setValorFiltro("");
    setListaFiltrada(listaProductos);
  };

  // Para las acciones del CRUD llamo a nuevas funciones que tiene el hook "useSupabase".
  // Estas solo devuelven true o false para indicar si se ha podido hacer la acción.
  const anyadirProducto = async () => {
    const resultado = await insertarDato("productos", datosProductos);

    if(resultado){
      setDatosProductos(datosProductoIniciales);
      await cargarProductos();
      setError("Producto Guardado con Éxito :) !!!.");
    }
  };

  const eliminarProducto = async (id) => {
    const resultado = await eliminarDato("productos", id);

    if(resultado){
      const nuevaLista = listaProductos.filter((p) =>{return p.id !== id});
       const nuevaListaFiltrada = listaFiltrada.filter((p) =>{return p.id !== id});

       setListaProductos(nuevaLista);
       setListaFiltrada(nuevaListaFiltrada);
       setError("Producto borrado correctamente :)");
    }
  };

  const cancelarModoEditar = () => {
    setEditando(false);
    setIdProducto(null);
    setDatosProductos(datosProductoIniciales);
  };

  const modificarProducto = async () => {
    const resultado = await editarDato("productos", idProducto, datosProductos);

    if(resultado){
      cancelarModoEditar();
      await cargarProductos();
      setError("Producto actualizado con éxito :)");
      navegar("/productos");
    }
  };

  // Siempre que se carge el componente lo primero que hará es cargar los datos de la tabla de la b.d.
  useEffect(() => {
    cargarProductos();
  }, []);

  const datos = {
    listaFiltrada,
    valorFiltro,
    setValorFiltro,
    numProductos,
    precioMedio,
    cargando,
    filtrarPorNombre,
    filtrarPorPeso,
    filtrarPorPrecio,
    resetearFiltro,
    ordenarPorNombre,
    ordenarPorPeso,
    ordenarPorPrecio,

    datosProductos,
    actualizarDatosProductos,
    anyadirProducto,
    eliminarProducto,
    modificarProducto,
    editando,
    cargarDatosFormulario_editar,
    cancelarModoEditar,
  };
  return (
    <contextoProductos.Provider value={datos}>
      {children}
    </contextoProductos.Provider>
  );
};

export default ProveedorProductos;
export { contextoProductos };
