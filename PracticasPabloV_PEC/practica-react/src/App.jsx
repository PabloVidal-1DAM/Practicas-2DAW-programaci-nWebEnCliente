import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Contenedor from './components/Ejercicio1/Contenedor.jsx'
import Interprete from './components/Ejercicio2/Interprete.jsx'
import Pelicula from './components/Ejercicio3/Pelicula.jsx'
import './App.css'

function App() {

  return (
    <>
    {/*Ejercicio 1: */}
      <Contenedor>
        {/*Ejercicio 2: */}
        <Interprete nombre='Ryan Gosling' 
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

      {/*Ejercicio 3: */}
      <Contenedor>
        <Pelicula titulo="Drive" direccion="Nicolas Winding Refn" cartela="https://i.pinimg.com/1200x/97/5e/21/975e2116029a6670c63faf1d7fc28a89.jpg">
          Drive (2011) es un thriller de acción y crimen dirigido por Nicolas Winding Refn. La película sigue a un conductor experto
           y mecánico en Los Ángeles, que trabaja como doble de riesgo en películas de cine y como conductor para criminales. Cuando 
           se involucra con su vecina Irene y su hijo, se ve obligado a protegerlos después de un robo que sale mal, lo que desata una 
           serie de violentos enfrentamientos. La película es conocida por su estilo visual estilizado, su banda sonora distintiva y la 
           actuación contenida pero intensa de Ryan Gosling.
        </Pelicula>

        {/*Primer interprete de la película */}
        <Interprete nombre='Carey Mulligan' 
        src="https://i.pinimg.com/736x/02/54/92/025492cda5f554e862760768877cc8e2.jpg"
        >
          Carey Mulligan (nacida el 28 de mayo de 1985 en Londres, Inglaterra) es una actriz británica reconocida por su talento versátil y 
          su presencia en cine independiente y comercial. Saltó a la fama con su papel en An Education (2009), por el que recibió nominaciones
          al Óscar y al BAFTA. Ha destacado en películas como Drive (2011), The Great Gatsby (2013) y Promising Young Woman (2020), mostrando una 
          capacidad notable para interpretar personajes complejos y emocionalmente intensos. Mulligan también ha trabajado en teatro y televisión, 
          consolidándose como una de las actrices británicas más respetadas de su generación.
        </Interprete>

        {/*Segundo interprete de la película */}
        <Interprete nombre='Ryan Gosling' 
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

        {/*Tercer interprete de la película */}
        <Interprete nombre='Oscar Isaac' 
        src="https://i.pinimg.com/1200x/7e/ca/16/7eca16bc0bc92c146cd3ba7ea15d0133.jpg"
        >
          Oscar Isaac (nacido el 9 de marzo de 1979 en Guatemala, de padres guatemaltecos y cubanos) es un actor y músico 
          estadounidense conocido por su versatilidad y carisma en cine, televisión y teatro. Saltó a la fama con películas como 
          Ex Machina (2015), Inside Llewyn Davis (2013) y la trilogía de Star Wars como Poe Dameron. 
          Ha sido elogiado por su capacidad de interpretar tanto personajes dramáticos como de acción, combinando intensidad emocional 
          con sutileza en la actuación. Además de actuar, Isaac tiene formación musical y ha participado en bandas sonoras y producciones teatrales.
        </Interprete>
      </Contenedor>
    </>
  );
}

export default App
