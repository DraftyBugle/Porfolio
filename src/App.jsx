
import NavBar from './Componentes/NavBar'
import Seccion1 from './Secciones/Seccion1'
import Seccion2 from './Secciones/Seccion2'
import Seccion3 from './Secciones/Seccion3'
import './App.css'
import Seccion4 from './Secciones/Seccion4'


function App() {


  return (

    
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

    <main></main>
<footer></footer>     
    </div>
  )
}

export default App
