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
-[ ] Hacer un campo donde se vea la vision
-[ ] Hacer un campo donde se vea los valores
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
    </div>

    
  );
}
