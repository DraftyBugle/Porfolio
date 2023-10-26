import React, { useState, useEffect } from 'react';
import "./Seccion1.css"
import  Me   from "../assets/IMG/person.png"

function Seccion1() {

    const [mostrarBoton, setMostrarBoton] = useState(false);

    useEffect(() => {
      // Espera 3 segundos antes de mostrar el botón
      const timeout = setTimeout(() => {
        setMostrarBoton(true);
      }, 2500);
  
      // Limpia el timeout al desmontar el componente
      return () => clearTimeout(timeout);
    }, []); // El segundo argumento [] asegura que esto solo se ejecute una vez al montar el componente
  



    const [h1Texto, setH1Texto] = useState('');
    const [h3Texto, setH3Texto] = useState('');
    const [h4Texto, setH4Texto] = useState('');
    const mensajeH1 = '     Hola...  ';
    const mensajeH3 = '   Mi nombre es Federico  ';
    const mensajeH4 =  "       Desarrollador   Web Full Stack      "
  
    useEffect(() => {
      let h1Index = 0;
      let h3Index = 0;
      let h4Index = 0;
  
      const escribirH1 = () => {
        if (h1Index < mensajeH1.length) {
          setH1Texto((prevTexto) => prevTexto + mensajeH1.charAt(h1Index));
          h1Index++;
        }
      };
  
      const escribirH3 = () => {
        if (h3Index < mensajeH3.length) {
          setH3Texto((prevTexto) => prevTexto + mensajeH3.charAt(h3Index));
          h3Index++;
        }
      };
      
      const escribirH4 = () => {
        if (h4Index < mensajeH4.length) {
          setH4Texto((prevTexto) => prevTexto + mensajeH4.charAt(h4Index));
          h4Index++;
        }
      };
  
      const intervaloH1 = setInterval(escribirH1, 70); // Velocidad de escritura para H1
      const intervaloH3 = setInterval(escribirH3, 70);
      const intervaloH4 = setInterval(escribirH4, 70); // Velocidad de escritura para H3
  
      return () => {
        clearInterval(intervaloH1); // Limpia el intervalo de H1 al desmontar el componente
        clearInterval(intervaloH3);
        clearInterval(intervaloH4);  // Limpia el intervalo de H3 al desmontar el componente
      };
    }, []);


  
    return (
        <div className='Container1' >
      <div className='Saludo'>
        <h1 className='Hola'>{h1Texto}</h1>
        <h3 className='Nombre'>{h3Texto}</h3>
        <h4 className='Dev'>{h4Texto}</h4>
       <div> <img src={Me} alt=""  className='me'/></div>
        {mostrarBoton && (
          <button     className={`Boton ${mostrarBoton ? 'visible' : ''}`}>Contactame</button>
      )}
      </div>

     
  
     
       </div>
    );
  }
  

export default Seccion1;