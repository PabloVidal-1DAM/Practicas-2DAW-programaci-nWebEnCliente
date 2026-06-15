import React, { useContext, useState, useEffect } from "react";
import useContextCatalogo from "../hook/useContextCatalogo";
import { useParams } from "react-router-dom";

const FormularioDisco = () =>{
  const {anyadirItem, modificarItem, navegar, interpretes, discos} = useContextCatalogo();

  const {id} = useParams();

  const valoresIniciales = {
    titulo: "",
    anyo: "",
    interpreteId: ""
  };
  const [nuevoDisco, setNuevoDisco] = useState(valoresIniciales);

  useEffect(() =>{
    if (id){
      const discoEncontrado = discos.find((disco) =>{
        return disco.id === id
      });

      discoEncontrado && setNuevoDisco(discoEncontrado);
    }
  }, [id, discos])

  const [erroresFormulario, setErroresFormulario] = useState({});

  

  const actualizarDato = (evento) =>{
    const {name, value} = evento.target;
    setNuevoDisco({...nuevoDisco, [name]: value});
  }

  const actualizarDatoCheck = (evento) =>{
    const {name, value, checked} = evento.target;
    setNuevoDisco({...nuevoDisco, [name]: checked ? value : ""});
  }
  // función para validar.

  const manejarEnvio = async(evento) =>{
    try{
      evento.preventDefault();
      if(id){
        await modificarItem(`discos/${id}`, nuevoDisco);
        alert("Disco modificado correctamente!");
      }else{
        await anyadirItem('discos', nuevoDisco);
        alert("Disco añadido correctamente!");
      }
    

      setNuevoDisco(valoresIniciales);
      navegar('/discos');
    }catch(error){
      console.log("Error al enviar el formulario: ", error);
    }
  }

  return(
  <form noValidate onSubmit={manejarEnvio}>

    <label htmlFor="titulo">Introduce el Título: </label>
    <input type="text" name="titulo" value={nuevoDisco.titulo} onChange={actualizarDato} />
    {/*{erroresFormulario.titulo ? <span style={{color: "red"}}>{erroresFormulario.titulo}</span>}*/}

    <br />
    <label htmlFor="anyo">Introduce el Año: </label>
    <input type="date" name="anyo" value={nuevoDisco.anyo} onChange={actualizarDato} />
    {/*{erroresFormulario.anyo ? <span style={{color: "red"}}>{erroresFormulario.anyo}</span>*/}

    <br />
    <label htmlFor="interpreteId">Selecciona el Interprete: </label>
    {interpretes.map((interprete) =>{
      return <div key={interprete.id}>
        <input type="checkbox" value={interprete.id} name="interpreteId" onChange={actualizarDatoCheck} checked={nuevoDisco.interpreteId === interprete.id} />
        <span style={{marginLeft: "5px"}}>{interprete.nombre}</span>
      </div>
    })}
    {/*{erroresFormulario.interpreteId ? <span style={{color: "red"}}>{erroresFormulario.interpreteId}</span>}*/}

    <button type="submit" style={{marginTop: "10px"}}>Enviar datos</button>
  </form>
  );
}

export default FormularioDisco;