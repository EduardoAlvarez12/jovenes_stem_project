import * as React from "react";
import Button from "@mui/material/Button";
import { Container, Typography } from "@mui/material";
import { Footer } from "../components/Footer";
import '../assets/css/Philosophy.css'




export function PhilosophyPage() {
  return (
    
    <div>
     
  
      <section className="contenedor">
        <div>
          <h2>
            Mision
          </h2>
          <p>
            Somos una universidad que se adapta a los cambios e 
            innova constantemente para responder a las necesidades 
            actuales y futuras de la sociedad, mediante la docencia, 
            investigación y proyección social.
          </p>
        
        </div>
        <img 
          
          className= "imagen" 
          height = '170px'
          src="https://drive.google.com/uc?export=view&id=10gBo81mYzLSblWwnaZ90tOQSBoYeZ8qz"
          alt="Mision de la U" />
      </section>
      <section className="contenedor"> 
        <div>
          <h2>
            vision
          </h2>
          <p>
            Ser una universidad referente comprometida 
            con los sectores de la sociedad a través de 
            sus aportes académicos y la consolidación de 
            las relaciones con sus socios.
          </p>
        </div>
        <img 
          className= "imagen" 
          height = '170px'
          src="https://drive.google.com/uc?export=view&id=1-qfjmKSkQsB4V6P9Qx4FIJwMbaZwJNaL" 
          alt="valores de la U" />
      </section>

      <section className="valores">

        <h2>
          valores
        </h2>

        <div className="elemento">
          <h3>Compromiso: </h3>
          <p>
            Aportamos nuestras capacidades en nuestras labores diarias, 
            aun cuando las circunstancias sean adversas y anteponemos 
            siempre el bienestar colectivo e institucional durante la toma de decisiones
          </p>
        </div>

        <div className="elemento">
          <h3>Responsabilidad: </h3>
          <p>
          Cumplimos con nuestras obligaciones y 
          asumimos las consecuencias de nuestros actos, sean positivos o negativos, 
          alineando nuestro actuar en busca del beneficio de la sociedad, l
          a comunidad universitaria y del medio ambiente.
          </p>
        </div>

        <div className="elemento">
          <h3>Inclusión: </h3>
          <p>
          Celebramos y promovemos la diversidad, 
          aprendemos de las diferencias que nos complementan 
          y creemos que todos los miembros de la comunidad 
          universitaria pueden contribuir con el desarrollo
          institucional.
          </p>
        </div>

        <div className="elemento"> 
          <h3>Resiliencia: </h3>
          <p>
          Enfrentamos los retos y las adversidades 
          individuales y como equipo, lo que nos permite 
          encontrar en los obstáculos oportunidades de crecimiento, 
          teniendo siempre en mente los objetivos institucionales.
          </p>
        </div>
      

      </section>

    </div>

    
  );
  
}
