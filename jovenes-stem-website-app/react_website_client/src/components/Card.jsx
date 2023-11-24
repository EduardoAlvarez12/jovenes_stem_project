import * as React from 'react';
import { useEffect, useState } from 'react';
import {getHomeContent} from '../api/home.api'
import { Container, Typography,Box,Grid,Paper} from "@mui/material";
import Masonry from '@mui/lab/Masonry';
import { styled } from '@mui/material/styles';

const Label = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(0.5),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  borderBottomLeftRadius: 0,
  borderBottomRightRadius: 0,
}));

const ImageMasonry = () => {
  const [QueHacemos, setQueHacemosData] = useState([]);

  useEffect(() => {
    async function loadHistory() {
      const res = await getHomeContent();
      setQueHacemosData(res.data)
    }
    loadHistory();
  })
  return <div>
    <Container  maxWidth="m" style={{ marginTop: '7%' }}>
        <Box sx={{ p: 1, borderLeft: 4, borderColor:'#1c21d1'}}>
        <Typography variant="h2" sx={{fontWeight: 'bold'}}  marginLeft={4}>¿Que Hacemos? </Typography> 
        </Box> 
        <Grid sx={{ p: 6, }} container 
      
        direction="row"
        justifyContent="center"
        alignItems="center">

       <div  style={{ marginTop: '7%' }}> 
       <Box sx={{ width: 900, minHeight: 829 }}>
      <Masonry columns={3} spacing={2}>
        {QueHacemos.map((QueHacemosD) => (
          <div key={QueHacemosD.id}>
            <Label>{QueHacemosD.description}</Label>
            <img
              src={QueHacemosD.cloud_image_url}
              loading="lazy"
              style={{
                borderBottomLeftRadius: 4,
                borderBottomRightRadius: 4,
                display: 'block',
                width: '100%',
              }}
            />
          </div>
        ))}
      </Masonry>
    </Box>
       </div>
   
    </Grid>
    </Container>

  </div>
    

}

export default ImageMasonry;
