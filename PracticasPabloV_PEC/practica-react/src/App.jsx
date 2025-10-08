import { useState } from 'react'
import './App.css'
import Matricula from './components/Ej3_09/Matricula';


function App(props) {

  return (
    <>
      <Matricula>{props.children}</Matricula>
    </>
  );
}

export default App
