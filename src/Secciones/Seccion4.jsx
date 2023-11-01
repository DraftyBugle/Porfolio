import React from "react";
import Contacto from "../Componentes/Contacto";
import "./Seccion4.css";

import ScrollReveal from 'scrollreveal';
import { useEffect } from "react";

function Seccion4(){
    const sr = ScrollReveal({ reset: true });
    sr.reveal('.Contacto');
   
     
   
    useEffect(() => {
     
       sr.reveal('.Contacto',{
          duration: 1500,
          origin:"top",
          distance:"-300px",
          delay: 100
       
        });
 
 
     }, []);
    return(
        <>
        <div className="Container4">
            <div className="Contacto">
            <Contacto/>
            </div>
        </div>
        </>
    )
}

export default Seccion4;