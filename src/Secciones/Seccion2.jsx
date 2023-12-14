import React, { useEffect } from "react";
import "./Seccion2.css" 
//import img
import Java from "../assets/IMG/JavaScript.png"
import CSS3 from "../assets/IMG/CSS.png"
import HTML5 from "../assets/IMG/HTML5.png"
import REACTT from "../assets/IMG/React.png"
import TS from "../assets/IMG/TS.png"
import SQL from "../assets/IMG/SQL.png"
import GITH from "../assets/IMG/GITH.png"
import Gits from "../assets/IMG/Gits.png"
import NJS from "../assets/IMG/Nodejs.png"
import { ImDownload3 } from 'react-icons/im';
//importo scrollReal
import ScrollReveal from 'scrollreveal';




function Seccion2(){
   const sr = ScrollReveal({ reset: true });
      sr.reveal('.GridT');
      sr.reveal('.Text');
       
     
      useEffect(() => {
       
         sr.reveal('.GridT',{
            duration: 1500,
            origin:"bottom",
            distance:"-200px",
            delay: 100
         
          }),
        
          sr.reveal('.About',{
            duration: 1500,
            origin:"bottom",
            distance:"-200px",
            delay: 100
         
          });
   
   
       }, []);

    return(
        <div className="Container2">


<div className="About">
<h2 className="SobreMi">Sobre mi...</h2>
        <p className="Text">
        Mi camino en el mundo de la programación comenzó impulsado por mi pasión por los desafíos y mi creatividad. 

        Programar es un arte en constante evolución, y me emociona la idea de enfrentar retos complejos y dar vida a proyectos innovadores.
         Mi enfoque se basa en la resolución de problemas y la búsqueda constante de mejorar.
</p>
 <a href="https://drive.google.com/file/d/1NKOU0Kdu4Nwlq4oNaIQ9Br1SQkMouAcu/view" download>
    <button className=" BotonD">
      <ImDownload3 className="iconD" />
      Descargar CV
      </button>
</a>

</div>

   <div className="GridT">

    <div className="card1 slide-in-elliptic-top-fwd"  >

        <div className="cardimg1"  >
            <img src={HTML5} alt="" className="cardImg"/>
          
            </div> 
            <h3> HTML</h3>
     </div> 

     <div className="card2" > 
        <div className="">  
           <img src={CSS3} alt=""  className="cardImg"/>
      </div>
 <h3>CSS</h3>
    </div>

    <div  className="card3"> 
        <div >  
           <img src={Java} alt=""  className="cardImg"/>
      </div>
 <h3>Js</h3>
    </div>

    <div className="card4"> 
        <div  >  
           <img src={REACTT} alt=""  className="cardImg"/>
      </div>
 <h3>React</h3>
    </div>

    <div className="card5" > 
        <div >  
           <img src={NJS} alt=""  className="cardImg"/>
      </div>
 <h3>Nodejs</h3>
    </div>

    <div className="card6" > 
        <div >  
           <img src={SQL} alt=""  className="cardImg"/>
      </div>
 <h3>SQL</h3>
    </div>

    <div className="card7" > 
        <div >  
           <img src={GITH} alt=""  className="cardImg"/>
      </div>
 <h3>Github</h3>
    </div>

    <div  className="card8"> 
        <div >  
           <img src={Gits} alt=""  className="cardImg"/>
      </div>
 <h3>git</h3>
    </div>
 
   </div>
   
        </div>
    )
}
export default Seccion2;