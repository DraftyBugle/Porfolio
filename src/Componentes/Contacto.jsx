import React from "react";
import "./Contacto.css";
import linkedinIcon from "../assets/IMG/linkedi.png"
import Email from "../assets/IMG/Email.png"
import Wpp from "../assets/IMG/Wpp.png"
function Contacto (){
    return (
        <>
        <div className="Card">
            <div className="Contactame"><h2>Contactame</h2></div>
            <div className="Contactos">
            <ul className="LEW">
                <li > <img src={linkedinIcon} alt="" className="Icon1" />
                <a href="https://www.linkedin.com/in/federico-terrazas-05325027b/" className="Link">FedericoMagunaTerrazas</a></li>
                <li > <img src={Email} alt="" className="Icon2" />  <a href="magunat.m.federico@gmail.com"   className="Email">Magunat.m.federico@gmail.com</a></li>
                <li > <img src={Wpp} alt="" className="Icon3" />      <a href="wa.link/b4m1wu" className="Wpp">+54 1150094804</a></li>
            </ul>
             
            </div>
           
        </div>
        </>
    )
}

export default Contacto;