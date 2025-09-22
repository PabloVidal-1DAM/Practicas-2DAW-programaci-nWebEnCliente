import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Contenedor from './components/Ejercicio1/Contenedor.jsx'
import Interprete from './components/Ejercicio2/Interprete.jsx'
import './App.css'

function App() {

  return (
    <>
      <Contenedor>
        <Interprete nombre='Ryan Gossling' 
        src="https://i.pinimg.com/736x/d4/75/4b/d4754bee1c877e3388a502411373acb5.jpg"
        >
        Ryan Gosling (nacido el 12 de noviembre de 1980 en London, Ontario, Canadá) es un actor y músico canadiense 
        conocido por su versatilidad y presencia en cine tanto independiente como comercial. Comenzó su carrera en la 
        televisión infantil en el programa The Mickey Mouse Club y luego dio el salto al cine con películas como The 
        Believer (2001) y Half Nelson (2006), por la que recibió una nominación al Óscar. Es reconocido por roles 
        icónicos en La La Land (2016), Drive (2011) y Blade Runner 2049 (2017). Además de actuar, Gosling 
        ha explorado la música como parte de la banda Dead Man's Bones. Su estilo combina intensidad dramática con 
        carisma natural, convirtiéndolo en uno de los actores más destacados de su generación.
        </Interprete>
      </Contenedor>
    </>
  );
}

export default App
