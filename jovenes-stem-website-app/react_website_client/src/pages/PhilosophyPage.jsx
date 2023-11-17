import * as React from "react";
import Button from "@mui/material/Button";
import { Card, Container, Typography, CardMedia, Grid } from "@mui/material";
import { Footer } from "../components/Footer";
import '../assets/css/Philosophy.css'
import CardContent from '@mui/material/CardContent';



export function PhilosophyPage() {
  return (
    
    <div>
      <Container className= "titulo">
        <Typography 
          variant="h2" align="center">Filosofia institucional</Typography>
      </Container>
  
      <Card>
        <CardContent align= "center" className="contenedor" >
          <div>
            <Typography variant="h3" align="center">
              Mision
            </Typography>
            <Typography variant="body1" align="center"> 
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
        </CardContent>

        <CardContent align= "center" className="contenedor" >
          <img 
            className= "imagen" 
            src="https://drive.google.com/uc?export=view&id=10gBo81mYzLSblWwnaZ90tOQSBoYeZ8qz"
            alt="Mision de la U" />
          
          <div>
            <Typography variant="h3" align="center">
              Mision
            </Typography>
            <Typography variant="body1" align="center"> 
              Somos una universidad que se adapta a los cambios e 
              innova constantemente para responder a las necesidades 
              actuales y futuras de la sociedad, mediante la docencia, 
              investigación y proyección social.
            </Typography>
          </div>
          
        </CardContent>
      </Card>


      <Container className= "titulo">
        <Typography 
          variant="h3" align="center">Valores</Typography>
      </Container>
      
      <Grid container spacing={1} align="center">
        <Grid item xs={4} className="grid">
          <Container align="center" className="contenedor">
              <Typography variant="h4">
                Compromiso
              </Typography>
              <Typography variant="body1">
                Aportamos nuestras capacidades en nuestras labores diarias, 
                aun cuando las circunstancias sean adversas y anteponemos 
                siempre el bienestar colectivo e institucional durante la toma de decisiones
              </Typography>
            </Container>
        </Grid>
        <Grid item xs={4} className="grid" >
          <Container align="center" className="contenedor">
              <Typography variant="h4">
                Responsabilidad
              </Typography>
              <Typography variant="body1">
                Cumplimos con nuestras obligaciones y 
                asumimos las consecuencias de nuestros actos, sean positivos o negativos, 
                alineando nuestro actuar en busca del beneficio de la sociedad, l
                a comunidad universitaria y del medio ambiente.
              </Typography>
            </Container>
        </Grid>
        <Grid item xs={4} className="grid" >
          <Container align="center" className="contenedor">
              <Typography variant="h4">
                Inclusión
              </Typography>
              <Typography variant="body1">
                Celebramos y promovemos la diversidad, 
                aprendemos de las diferencias que nos complementan 
                y creemos que todos los miembros de la comunidad 
                universitaria pueden contribuir con el desarrollo
                institucional.
              </Typography>
            </Container>
        </Grid>

        <Grid item xs={4} className="grid">
          <Container align="center" className="contenedor">
              <Typography variant="h4">
                Resiliencia:
              </Typography>
              <Typography variant="body1">
                Enfrentamos los retos y las adversidades 
                individuales y como equipo, lo que nos permite 
                encontrar en los obstáculos oportunidades de crecimiento, 
                teniendo siempre en mente los objetivos institucionales.
              </Typography>
            </Container>
        </Grid>


      </Grid>
        

      </div>
    
  );
  
}
