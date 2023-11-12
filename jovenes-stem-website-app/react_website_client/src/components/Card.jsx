import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Button from '@mui/material/Button';
import { Container, Typography,Card,CardContent,CardMedia,Box,Grid, CardActionArea } from "@mui/material";



export default function StandardImageList() {
  return (

    <Container  maxWidth="m" style={{ marginTop: '7%' }}>
        <Box sx={{ p: 1, borderLeft: 4, borderColor:'#1c21d1'}}>
        <Typography variant="h2" sx={{fontWeight: 'bold'}}  marginLeft={4}>¿Qué Hacemos? </Typography> 
        </Box> 
        <Grid sx={{ p: 6, }} container 
        spacing={10} 
        direction="row"
        justifyContent="center"
        alignItems="center">
          <Grid item>
      <Card sx={{ maxWidth: 400 }} >
      <CardActionArea>
        <CardMedia
          component="img"
          height="170"
          src='https://drive.google.com/uc?export=view&id=1-gzE5ZH_UnwIZahr_jvFaeY36nQWNv5G&rl' 
          alt="Clases Tecnologia"
        />
        <CardContent>
          <Typography variant="body2">
           Impartimos clases teóricas y prácticas con instructores 
           capacitados, mejorando tu aprendizaje.

          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
          
          </Grid>
          
          <Grid item>
      <Card sx={{ maxWidth: 400 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="170"
          src='https://drive.google.com/uc?export=view&id=1YdgylRhy-J4b3VfMSMWqswIVJGwDqqMz&rl' 
          alt="visita tecnica"
        />
        <CardContent>
          <Typography variant="body2">
              Realizamos visitas técnicas a empresas STEM
              con el fin de sembrar en los jóvenes el interés en
              las áreas de Ingeniería y Tecnología.

          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>

          </Grid>

          <Grid item>
      <Card sx={{ maxWidth: 400 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          src='https://drive.google.com/uc?export=view&id=1eyff9zvw8qe4ZaBseYn8ubyBhp7MdtjF&rl' 
          alt="actividad recreativa"
        />
        <CardContent>
          <Typography variant="body2">
           La conviencia y apoyo es vital en nuestro equipo, 
           realizamos actividades recreativas.

          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
          
          </Grid>
          <Grid item>
      <Card sx={{ maxWidth: 400 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          src='https://drive.google.com/uc?export=view&id=1Cc4Yj2mHS4nbKJc8aY8YlYkdc8IAYnka&rl' 
          alt="green iguana"
        />
        <CardContent>
          <Typography variant="body2" >
           Brindamos asistencia presencial y virtual para 
           todos nuestros participantes por igual.

          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
          
          </Grid>
          
        </Grid>
 
      </Container>


    
  );
}