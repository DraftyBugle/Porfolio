import React from "react";
import { useEffect } from "react";
import "./Seccion3.css";
import StyleCarrusel from "../Componentes/StyleCarrusel"
import Proyecto1 from "../Componentes/Proyecto1"
//Impor Scroll Reavel
import ScrollReveal from 'scrollreveal';


function Seccion3 (){
    const sr = ScrollReveal({ reset: true });
    sr.reveal('.Proyectos');
    sr.reveal('.ProyectosCard');
     
   
    useEffect(() => {
     
       sr.reveal('.Proyectos',{
          duration: 1500,
          origin:"top",
          distance:"-200px",
          delay: 100
       
        }),
      
        sr.reveal('.ProyectosCard',{
          duration: 1500,
          origin:"top",
          distance:"-200px",
          delay: 100
       
        });
 
 
     }, []);

    return(
        <div className="Container3">
<div className="Proyectos">
      <h2>Mis Proyectos</h2>

      </div>
      <div className="ProyectosCard"> 
      
      <Proyecto1/>
     
</div>

        </div>
    )
}

export default Seccion3;