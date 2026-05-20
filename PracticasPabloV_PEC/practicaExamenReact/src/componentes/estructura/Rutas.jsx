import React from 'react'
import {Routes, Route} from 'react-router-dom'

import Inicio from '../pages/Inicio'
import Catalogo from '../pages/Catalogo'

import Discografias from '../discografias/Discografias'
import DiscografiaDetalle from '../discografias/DiscografiaDetalle'

import Interpretes from '../interpretes/Interpretes'
import InterpreteDetalle from '../interpretes/InterpreteDetalle'

import Discos from "../discos/Discos"
import DiscoDetalle from "../discos/DiscoDetalle"
import FormularioDisco from '../forms/FormularioDisco'
import FormularioInterprete from '../forms/FormularioInterprete'
import FormularioDiscograficas from '../forms/FormularioDiscograficas'

const Rutas = () => {
  return (
    <>
    <Routes>
        <Route path='/' element={<Inicio /> } />
        <Route path='/catalogo' element={<Catalogo />} />

        <Route path='/discografias' element={<Discografias />} />
        <Route path='/discografia/:id' element={<DiscografiaDetalle />} />
        <Route path='/discografias/añadir' element={<FormularioDiscograficas />} />

        <Route path='/interpretes' element={<Interpretes />} />
        <Route path='/interprete/:id' element={<InterpreteDetalle />} />
        <Route path='/interprete/añadir' element={<FormularioInterprete />} />

        <Route path='/discos' element={<Discos />} />
        <Route path='/disco/:id' element={<DiscoDetalle />} />
        <Route path='/discos/añadir' element={<FormularioDisco />} />

        <Route path='*' element={<h2>Error 404: Página no encontrada</h2>} />
    </Routes>
    </>
  )
}

export default Rutas
