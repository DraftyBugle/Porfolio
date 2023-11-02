
import NavBar from './Componentes/NavBar'
import Seccion1 from './Secciones/Seccion1'
import Seccion2 from './Secciones/Seccion2'
import Seccion3 from './Secciones/Seccion3'
import './App.css'
import Seccion4 from './Secciones/Seccion4'
import { useState, useEffect } from 'react'
import Cargando from './Componentes/Cargando';

function App() {
const [loading, setLoading]= useState(true);

useEffect(() => {
  setTimeout(() => {
    setLoading(false);
  }, 1500);
}, []);


  return (
    <div>
    {loading ? (
      <Cargando />
    ) : (
    <div className='Porfolio' id='home'>
  

   <NavBar className="Nav"/>
  
      <section id="seccion1">
    
      <Seccion1 />
      </section>


      <section id="seccion2">
      
      <Seccion2/>
      </section>

      <section id="seccion3">
    <Seccion3/>
      </section>
      
      <section id="seccion4">
    <Seccion4/>
    </section>

<footer></footer>    

    
    </div>
    )}

    </div>
    )
  
  
  }
 
export default App
