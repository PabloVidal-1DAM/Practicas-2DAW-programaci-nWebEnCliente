import React, { useContext, useState } from "react";
import useContextCatalogo from "../hook/useContextCatalogo";

const FormularioDisco = () => {
  const valoresIniciales = {
    titulo: "",
    anyo: "",
    interpreteId: "",
  };

  const [nuevoDisco, setNuevoDisco] = useState(valoresIniciales);

  const [erroresForm, setErroresForm] = useState({});

  const { interpretes, anyadirItem, navegar } = useContextCatalogo();

  const actualizarDato = (evento) => {
    const { name, value } = evento.target;
    setNuevoDisco({ ...nuevoDisco, [name]: value });
  };

  const validarFormularioDiscos = () => {
    let erroresTemporales = {};

    if (!nuevoDisco.titulo.trim()) {
      erroresTemporales.titulo = "El título es obligatorio.";
    }

    const anyoActual = new Date().getFullYear();
    if (nuevoDisco.anyo < 1900 || nuevoDisco.anyo > anyoActual) {
      erroresTemporales.anyo = `El año debe estar entre 1900 y ${anyoActual}.`;
    }

    if (!nuevoDisco.interpreteId) {
      erroresTemporales.interpreteId = "Debes seleccionar un interprete";
    }

    setErroresForm(erroresTemporales);

    return Object.keys(erroresTemporales.length === 0);
  };

  const manejarEnvio = async (evento) => {
    evento.preventDefault();
    if (validarFormularioDiscos()) {
      try {
        await anyadirItem(`discos`, nuevoDisco);

        alert("Disco Añadido correctamente!");
        setNuevoDisco(valoresIniciales);
        navegar("/discos");
      } catch (error) {
        console.log("falló el guardado", error);
      }
    }
  };
  return (
    <div>
        <h2>Añadir un nuevo disco</h2>
      <form noValidate>

            <label htmlFor="titulo">Título del disco:</label>
            <input type="text" name="titulo" value={nuevoDisco.titulo} onChange={actualizarDato} />
            {erroresForm.titulo && <span style={"color: red"}>{erroresForm.titulo}</span>}

            <label htmlFor="anyo">Año del disco:</label>
            <input type="date" name="anyo" value={nuevoDisco.anyo} onChange={actualizarDato} />
            {erroresForm.anyo && <span style={{color: "red"}}>{erroresForm.anyo}</span>}

            <label htmlFor="idInterprete">Selecciona el id del interprete</label>
            {interpretes.map((interprete) =>{
             return <div key={interprete.id}>
                        <input 
                            type="radio" 
                            name="interpreteId" 
                            value={interprete.id} 
                            checked={nuevoDisco.interpreteId === interprete.id}
                            onChange={actualizarDato} 
                        />
                        <span style={{marginLeft: "5px"}}>{interprete.nombre}</span>
                    </div>
            })}
            {erroresForm.interpreteId && <span style={{color: "red"}}>{erroresForm.interpreteId}</span>}

            <button type="submit" style={{marginTop: "5px"}} onClick={manejarEnvio}>Enviar datos</button>
      </form>
    </div>
  );
};

export default FormularioDisco;
