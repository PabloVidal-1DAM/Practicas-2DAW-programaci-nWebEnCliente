import React from "react";
import {Routes, Route} from "react-router-dom";
import Error from "./Error";
import PaginaDiscente from "./PaginaDiscente";
import PaginaProfesor from "./PaginaProfesor";
import FormularioNotas from "./FormularioNotas";
import App from "../../App";
import Inicio from "./Inicio";
import ExpedienteDiscentes from "./ExpedienteDiscentes";

const Rutas = () =>{
    return (
    <>
        <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/error" element={<Error />} />
            <Route path="/expediente" element={<PaginaDiscente />} />
            <Route path="/expediente/:id" element={<ExpedienteDiscentes />} />

            <Route path="/docente" element={<PaginaProfesor />} />
            <Route path="/modulo" element={<FormularioNotas />} />
            <Route path="/modulo/:id" element={<FormularioNotas />} />
        </Routes>
    </>
    );
}

export default Rutas