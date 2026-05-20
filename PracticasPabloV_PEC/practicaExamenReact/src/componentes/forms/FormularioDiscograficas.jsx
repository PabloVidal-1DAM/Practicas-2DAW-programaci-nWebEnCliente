import React, { useState } from 'react'
import useContextCatalogo from '../hook/useContextCatalogo';

const FormularioDiscograficas = () => {

    const valoresIniciales = {
        nombre: "",
        sede: ""
    };
    const [nuevaDiscografica, setNuevaDiscografica] = useState(valoresIniciales);
    const [erroresFormulario, setErroresFormulario] = useState({});

    const {anyadirItem, navegar} = useContextCatalogo();

    const actualizarDato = (evento) =>{
        const {name, value} = evento.target;
        setNuevaDiscografica({...nuevaDiscografica, [name]: value});
    }

    const verificarFormulario = () =>{

    }

    const manejarEnvio = async(evento) =>{
        evento.preventDefault();
        try{
            await anyadirItem(`discograficas`, nuevaDiscografica);
            setNuevaDiscografica(valoresIniciales);
            navegar(`/discografias`);
        }catch(error){
            console.log("ha ocurrdido un error al enviar el form: ", error);
        }
    }

  return (
    <form noValidate>
        <label htmlFor='nombre'>Introduce el nombre:</label>
        <input type='text' name='nombre' value={nuevaDiscografica.nombre} onChange={actualizarDato} />

        <label htmlFor='sede'>Introduce lugar de la sede:</label>
        <input type='text' name='sede' value={nuevaDiscografica.sede} onChange={actualizarDato} />

        <button type='submit' style={{marginTop: "5px"}} onClick={manejarEnvio}>Enviar Datos</button> 
    </form>
  )
}

export default FormularioDiscograficas
