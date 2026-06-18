import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

// Importamos nuestros hooks personalizados (nuestras herramientas)
import useContextMatriculas from '../hooks/useContextMatrículas';
import useContextModulos from '../hooks/useContextModulos';
import useContextPracticas from '../hooks/useContextPracticas';

const ExpedienteDiscentes = () => {
    // PASO 1: EL ANCLA
    const { id } = useParams(); 

    // Nos traemos las herramientas de los proveedores
    const { obtenerMatriculaPorDiscente } = useContextMatriculas();
    const { obtenerModuloPorId } = useContextModulos();
    const { obtenerPracticasPorMatricula } = useContextPracticas();

    // Estado para guardar el resultado final ya cruzado
    const [expedienteFinal, setExpedienteFinal] = useState([]);
    const [cargandoExpediente, setCargandoExpediente] = useState(true);

    useEffect(() => {
        const construirExpediente = async () => {
            setCargandoExpediente(true);
            try {
                // PASO 2: EL PUENTE
                // Buscamos la lista de matrículas de este alumno
                const misMatriculas = await obtenerMatriculaPorDiscente(id);
                console.log(misMatriculas);

                // PASO 3: EL MAPA DE PROMESAS
                // Preparamos las búsquedas simultáneas para cada matrícula
                const promesas = misMatriculas.map(async (matricula) => {
                    
                    // Disparamos la búsqueda del Módulo y sus Prácticas AL MISMO TIEMPO
                    const [resModulo, resPracticas] = await Promise.allSettled([
                        obtenerModuloPorId(matricula.moduloId),
                        obtenerPracticasPorMatricula(matricula.id)
                    ]);

                    console.log(resModulo);
                    console.log(resPracticas);

                    // Promise.allSettled nos obliga a comprobar si el status fue 'fulfilled' (éxito)
                    const moduloLimpio = resModulo.status === 'fulfilled' ? resModulo.value : null;
                    const practicasLimpias = resPracticas.status === 'fulfilled' ? resPracticas.value : [];

                    // Calculamos la media de las notas (como pide el examen)
                    let media = 0;
                    if (practicasLimpias.length > 0) {
                        const sumaTotal = practicasLimpias.reduce((acumulador, practica) => acumulador + practica.nota, 0);
                        media = sumaTotal / practicasLimpias.length;
                    }

                    // Empaquetamos todo lo de esta asignatura en un objeto bonito
                    return {
                        modulo: moduloLimpio,
                        practicas: practicasLimpias,
                        notaMedia: media.toFixed(1) // Formateado con un decimal
                    };
                });

                // PASO 4: EL DISPARO SIMULTÁNEO FINAL
                // Ejecutamos todo el bloque de arriba a la vez
                const resultadosAsignaturas = await Promise.allSettled(promesas);

                // Nos quedamos solo con las asignaturas que cargaron bien
                const expedienteLimpio = resultadosAsignaturas
                    .filter(resultado => resultado.status === 'fulfilled')
                    .map(resultado => resultado.value);

                // ¡Guardamos en el estado para pintar el HTML!
                setExpedienteFinal(expedienteLimpio);

            } catch (error) {
                console.log("Error al construir el expediente:", error);
            } finally {
                setCargandoExpediente(false);
            }
        };

        if (id) {
            construirExpediente(); // Arrancamos el motor si hay un ID en la URL
        }
    }, [id]); // Se vuelve a ejecutar si cambia el alumno en la URL

    
    // --- ZONA DE RENDERIZADO HTML ---
    if (cargandoExpediente) return <h2>Construyendo expediente, por favor espere...</h2>;

    return (
        <div>
            <h2>Expediente del Alumno <span style={{color: "blue"}}>{}</span></h2>
            <hr />
            {expedienteFinal.map((item, index) => {
                return (
                    <div key={index} style={{ border: "1px solid #ccc", padding: "10px", margin: "10px 0" }}>
                        {/* Pintamos los datos del módulo */}
                        <h3>{item.modulo?.nombre} ({item.modulo?.horas} horas)</h3>
                        <p><strong>Nota Media:</strong> {item.notaMedia}</p>
                        
                        {/* Pintamos la sub-lista de prácticas */}
                        <h4>Prácticas:</h4>
                        <ul>
                            {item.practicas.map(practica => (
                                <li key={practica.id}>
                                    {practica.titulo} - Nota: {practica.nota}
                                </li>
                            ))}
                        </ul>
                    </div>
                )
            })}
        </div>
    );
};

export default ExpedienteDiscentes;