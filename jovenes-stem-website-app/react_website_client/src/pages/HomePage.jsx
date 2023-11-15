import * as React from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { SwipeableTextMobileStepper } from "../components/Carousel";
import { Typography } from "@mui/material";
import StandardImageList from '../components/Card'
import { Testimonials } from "../components/Testimonials";

const images = [
  {
    title: "Tecno Girls – Incripcion del año 2023",
    cloud_image_url:

      "https://drive.google.com/uc?export=view&id=1s6VP8a6SRX1x-9bUtKYS-zBPXFxyp9gA&rl",
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

const testimonialImages = [
  {
    title: "Shirley Fultz",
    description:
      "It's freeing to be able to catch up on customized news and not be distracted by a social media element on the same site",
    cloud_image_url: "https://cdn1.iconfinder.com/data/icons/user-pictures/100/female1-512.png",
  },
  {
    title: "Daniel Keystone",
    description: "The simple and intuitive design makes it easy for me use. I highly recommend Fetch to my peers.",
    cloud_image_url: "https://creazilla-store.fra1.digitaloceanspaces.com/icons/7914838/woman-icon-md.png"
  },
  {
    title: "Theo Sorel",
    description: "I enjoy catching up with Fetch on my laptop, or on my phone when I'm on the go!",
    cloud_image_url: "https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-Vector-No-Background.png",
  },
];


export function HomePage() {
  return (
    <div>
      <Typography variant="h1" align="center" color="#1c21d1" sx={{ fontWeight: 'bold', m: 1, fontSize: 55 }} paddingTop={2} > Jóvenes en STEM</Typography>
      <div>
        <Box
          sx={{
            background:
              "linear-gradient(to right, white 0%, #5458ca 30%, #575cfc 70%, white 100%)",
            boxShadow:
              "10px 0 10px -10px rgba(0, 0, 0, 0.3), -10px 0 10px -10px rgba(0, 0, 0, 0.3)",
          }}>
          <SwipeableTextMobileStepper images={images} />
        </Box>
      </div>
      <StandardImageList />
      <Typography id="title-history">Casos de Éxito</Typography>
      <Testimonials testimonialImages={testimonialImages} />
    </div>
  );
}