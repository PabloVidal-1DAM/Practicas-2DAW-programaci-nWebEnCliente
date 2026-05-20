import React, { useState } from 'react'
import useContextCatalogo from '../hook/useContextCatalogo';

const FormularioInterprete = () => {

    const valoresIniciales = {
        nombre: "",
        genero: "",
        discograficaId: ""
    };
    const [nuevoInterprete, setNuevoInterprete] = useState(valoresIniciales);

    const [erroresFormulario, setErroresFormulario] = useState({});

    const {discograficas, anyadirItem, navegar } = useContextCatalogo();

    const actualizarDato = (evento) =>{
        const {name, value} = evento.target;
        setNuevoInterprete({...nuevoInterprete, [name] : value})
    }

    const actualizarDatoCheckBox = (evento) =>{
        const {name, value, checked} = evento.target;
        setNuevoInterprete({...nuevoInterprete,
            [name] : checked ? value : "" 
        })
    }
    // Función de verificación del formulario

    const manejarEnvio = async(evento) =>{
        evento.preventDefault();
            try{
                await anyadirItem(`interpretes`, nuevoInterprete);
                setNuevoInterprete(valoresIniciales);
                navegar(`/interpretes`)
            }catch(error){
                console.log("error al enviar el formulario", error)
            }
    }
  return (
    <form noValidate>
        <label htmlFor='nombre'>Nombre del Interprete</label>
        <input type='text' name='nombre' value={nuevoInterprete.nombre} onChange={actualizarDato} />
        {/*erroresFormulario.nombre && <span style={{color: "red"}}>{erroresFormulario.nombre}</span>*/}

        <label htmlFor='genero'>Genero del Interprete</label>
        <input type='text' name='genero' value={nuevoInterprete.genero} onChange={actualizarDato} />
        {/*erroresFomrulario.genero && <span style={{color: "red"}}>{erroresFormulario.genero}</span>*/}

        <label htmlFor='discograficaId'>Id de la discografica:</label>
        {discograficas.map((discografica) =>{
            return <div key={discografica.id}>
                <input type="checkbox" name='discograficaId' value={discografica.id} onChange={actualizarDatoCheckBox} checked={nuevoInterprete.discograficaId === discografica.id} />
                <span style={{marginLeft: "5px"}}>{discografica.nombre}</span>
            </div>
        })}
        {/*erroresFormulario.discograficaId && <span style={{color: "red"}}>{erroresFormulario.discograficaId}</span>*/}

        <button type='submit' style={{marginTop: "5px"}} onClick={manejarEnvio}>Enviar Datos</button>
    </form>
  )
}

export default FormularioInterprete
