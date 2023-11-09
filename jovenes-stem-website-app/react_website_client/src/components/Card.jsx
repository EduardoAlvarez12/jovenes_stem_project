import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Button from '@mui/material/Button';
import { Container, Typography,Card,CardContent,CardMedia,Box,Grid, CardActionArea } from "@mui/material";



export default function StandardImageList() {
  return (

    <Container  maxWidth="m" style={{ marginTop: '7%' }}>
        <Box sx={{ p: 1, borderLeft: 4, borderColor:'#1c21d1'}}>
        <Typography variant="h2" sx={{fontWeight: 'bold'}}  marginLeft={4}>¿Que Hacemos? </Typography> 
        </Box> 
        <Grid sx={{ p: 6, }} container 
        spacing={10} 
        direction="row"
        justifyContent="center"
        alignItems="center">
          <Grid item>
      <Card sx={{ maxWidth: 400 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="170"
          src='https://drive.google.com/uc?export=view&id=1-gzE5ZH_UnwIZahr_jvFaeY36nQWNv5G&rl' 
          alt="green iguana"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
           Impartimos clases teoricas y practicas,actividades
            recreativas y de convivencia.

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
          alt="green iguana"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
              Realizamos visitas tecnicas a empresas de Desarrollo,
              con el fin de que los jovenes tengan interes en el
              area de Ingenieria y Tecnologia.

          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>

          </Grid>
        </Grid>
 
      </Container>


    
  );
}