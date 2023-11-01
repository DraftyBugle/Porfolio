import React from "react";
import "./NavBar.css"
import { useState , useEffect} from "react";
import { PiHamburgerBold } from 'react-icons/pi';
import ScrollReveal from 'scrollreveal';
function NavBar(){
    
   const [click,setClick]=useState(false);
   const handleClick = ()=>{
    setClick (!click);
    
   }

  

    return(  
        <div className="Container">
         <div  className="Button"  onClick={handleClick}> <PiHamburgerBold className="Icon"/>  </div>
            {click && (
              <div className="Menu">
                  <ul className="Lista">
                  <li> <a href="#seccion1">Inicio</a> </li>
                  <li> <a href="#seccion2">Sobre Mi</a> </li>
                  <li> <a href="#seccion3">Proyectos</a> </li>
                  <li>  <a href="#seccion4">Contacto</a> </li>
              </ul>
              </div> 
      
      )}
      
         
        
        </div>

    )
}

export default NavBar;