import React from "react";
import "./NavBar.css"

function NavBar(){
    
   

    return(  
        <div className="Container">
            <ul className="Lista">
                <li> <a href="#seccion1">Inicio</a> </li>
                <li> <a href="#seccion2">Sobre Mi</a> </li>
                <li> <a href="#seccion3">Proyectos</a> </li>
                <li>  <a href="#seccion4">Contacto</a> </li>
            </ul>
        </div>

    )
}

export default NavBar;