import React from "react"
import Ecommerce from "../assets/IMG/Ecommerce.png"
import "./Proyecto1.css"
function Proyecto1(){
    return(
        <div className="CardEcomerce">
          
 <img src={Ecommerce} alt=""  className="IMGP1"/>
 
 <div className="NameP">
 <h3>Ecomerce</h3>
 </div>
 <div className="TegP1">
    <div className="htmlP1">Html</div>
     <div className="CssP1">CSS </div> 
     <div className="jsP1">JavaScript</div>
      <div className="ApiP1">Api</div> 
      <div className="ReactP1">React</div>
   
</div>
<div className="VerP1">
    <a href="https://github.com/DraftyBugle/Ecommerce">  
    <button className="ButonP1">Git hub</button>
     </a>
   
   </div>
</div>
       
    )
}
export default Proyecto1;