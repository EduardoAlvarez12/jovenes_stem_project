import * as React from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { CarouselLand } from "../components/CarouselLand";
import { Container, Typography } from "@mui/material";
import StandardImageList from '../components/Card'

const images = [
  {
    title: "Tecno Girls – Incripcion del año 2023",
    cloud_image_url:
      
     "https://drive.google.com/uc?export=view&id=1s6VP8a6SRX1x-9bUtKYS-zBPXFxyp9gA&rl"  ,
  },
  {
    title: "Chicas Tecnológicas",
    cloud_image_url:
      "https://drive.google.com/uc?export=view&id=1oo6szbDdMUYKmpkGxRey2C7M5-cavRk5&rl",
  },
  {
    title: "Grupo de Tecnologia",
    cloud_image_url:
      "https://drive.google.com/uc?export=view&id=1TFifm4OK5bEtuiKnP1L3w8epUnCgj6K3&rl",
  },
  {
    title: "Área de Ingeniería- Principio de Diseño",
    cloud_image_url:
      "https://drive.google.com/uc?export=view&id=1E4Ro3XmaqiWkwjJXN6dTCxtuym3erTtV&rl",
  },
  {
    title: "Despedida de los estudiantes ",
    cloud_image_url:
      "https://drive.google.com/uc?export=view&id=1_SXnpv-BMZfyGo3X7ZKUO8Fke8MZ-G0q&rl",
  },

];


export function HomePage() {
  return (
    <div>
      <Typography variant="h1" align="center" color="#1c21d1" sx={{fontWeight: 'bold', m:1, fontSize: 55}} paddingTop={2} > Jóvenes en STEM</Typography>
      <div>
      <Box
        sx={{
          background:
            "linear-gradient(to right, white 0%, #5458ca 30%, #575cfc 70%, white 100%)",
          boxShadow:
            "10px 0 10px -10px rgba(0, 0, 0, 0.3), -10px 0 10px -10px rgba(0, 0, 0, 0.3)",
        }}>

        <CarouselLand images={images} />
      </Box>
      </div>

      <StandardImageList/>
     
    </div>
  );
}
