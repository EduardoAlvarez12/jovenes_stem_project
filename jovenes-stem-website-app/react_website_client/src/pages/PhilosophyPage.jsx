import * as React from "react";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";

/* nota para mi los comentarios son raros de react:

nota para mi: 
1- como dice el dicho no te quejes por algo que no puedes cambiar y solo busca soluciones y hazlo 
2- recuerda mantener las cosas simple 
3- detenerme , pensar y luego programar

cosas que hay que hacer:

-[X] Hacer un campo donde se vea la mision
-[x] Hacer un campo donde se vea la vision
-[x] Hacer un campo donde se vea los valores
-[ ] Hacer el formato
-[ ] buscar como darle estilo CSS con Mui

P.D me gusta ponerme notas para mi para no olvidarme 
*/

export function PhilosophyPage() {
  return (
    <div>
      <Typography variant="h1">Filosofía Institucional</Typography>
      

      <h1>Prueba de reat inicio de la branch filosofia</h1>    

      {/* Seccion de mision */}
      <div>
        <div className="texto">
        <Typography variant="h2">mision</Typography>
        <Typography variant="body2">
          Somos una universidad que se adapta a los cambios e 
          innova constantemente para responder a las necesidades 
          actuales y futuras de la sociedad, mediante la docencia, 
          investigación y proyección social.
         </Typography>
         </div>
         <img 
          className= "imagen" 
          src="https://drive.google.com/uc?export=view&id=10gBo81mYzLSblWwnaZ90tOQSBoYeZ8qz"
          alt="Mision de la U" />
      </div>
      

      {/* Seccion de vision */}
      <div>
        <div className="texto">
        <Typography variant="h2">vision</Typography>
        <Typography variant="body2">
          Ser una universidad referente comprometida 
          con los sectores de la sociedad a través de 
          sus aportes académicos y la consolidación de 
          las relaciones con sus socios.
         </Typography>
         </div>
         <img 
          className= "imagen" 
          src="https://drive.google.com/uc?export=view&id=1-qfjmKSkQsB4V6P9Qx4FIJwMbaZwJNaL" 
          alt="valores de la U" />
      </div>

      {/* Seccion de valores */}
      <div>
        <div className="texto">
        <Typography variant="h2">valores</Typography>
        <Typography variant="h3">Compromiso:</Typography>
        <Typography variant="body2">
          Aportamos nuestras capacidades en nuestras labores diarias, 
          aun cuando las circunstancias sean adversas y anteponemos 
          siempre el bienestar colectivo e institucional durante la toma de decisiones.
         </Typography>
         <Typography variant="h3">Responsabilidad: </Typography>
         <Typography variant="body2">
          Cumplimos con nuestras obligaciones y 
          asumimos las consecuencias de nuestros actos, sean positivos o negativos, 
          alineando nuestro actuar en busca del beneficio de la sociedad, l
          a comunidad universitaria y del medio ambiente.
         </Typography>
         <Typography variant="h3">Inclusión:</Typography>
         <Typography variant="body2">
          Celebramos y promovemos la diversidad, 
          aprendemos de las diferencias que nos complementan 
          y creemos que todos los miembros de la comunidad 
          universitaria pueden contribuir con el desarrollo 
          institucional.
         </Typography>
         <Typography variant="h3">Resiliencia:</Typography>
         <Typography variant="body2">
          Enfrentamos los retos y las adversidades 
          individuales y como equipo, lo que nos permite 
          encontrar en los obstáculos oportunidades de crecimiento, 
          teniendo siempre en mente los objetivos institucionales.
         </Typography>
         </div>
      </div>

    </div>

    
  );
}
