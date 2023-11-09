import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Tooltip  from '@mui/material/Tooltip';
import { Container, Typography } from "@mui/material";



export default function StandardImageList() {
  return (

    <Container  maxWidth="m" style={{ marginTop: '7%' }}>
        <Box sx={{ p: 1, borderLeft: 4, borderColor:'#1c21d1'}}>
        <Typography variant="h2" sx={{fontWeight: 'bold'}}  marginLeft={4}>¿Que Hacemos? </Typography> 

        <Grid sx={{ p: 6, }} container 
        spacing={10} 
        direction="row"
        justifyContent="center"
        alignItems="center">
          <Grid item>
            <img src='https://drive.google.com/uc?export=view&id=1-gzE5ZH_UnwIZahr_jvFaeY36nQWNv5G&rl' width={350} />
            <Grid item >
              <Box textAlign='center' width={300} padding={3}>
              <Typography variant='body2' >
            Impartimos clases teoricas y practicas,actividades
            recreativas y de convivencia.

            </Typography>
              </Box>
          </Grid>
          </Grid>
          
          <Grid item>
          <img src='https://drive.google.com/uc?export=view&id=1YdgylRhy-J4b3VfMSMWqswIVJGwDqqMz&rl' width={450}/>
          <Grid item >
              <Box textAlign='center' width={300} padding={3} marginLeft={5}>
              <Typography variant='body2'>
              Realizamos visitas tecnicas a empresas de Desarrollo,
              con el fin de que los jovenes tengan interes en el
              area de Ingenieria y Tecnologia.
        
            </Typography>
              </Box>
           

          </Grid>

          </Grid>

        </Grid>
       
        {/*  <Box marginRight={100 } >
       <Container maxWidth="m" >
      <Typography variant="h5" >
          

          
        </Typography>
          
        </Container>
        </Box>*/} 
    
        </Box> 
        
      
      </Container>


    
  );
}