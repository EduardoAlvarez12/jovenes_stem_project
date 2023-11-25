import * as React from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { SwipeableTextMobileStepper } from "../components/Carousel";
import { Typography } from "@mui/material";
import StandardImageList from '../components/Card'
import { Testimonials } from "../components/Testimonials";

const images = [
  {
    title: "Tecno Girls – Inscripción del año 2023",
    cloud_image_url:
      "https://i.imgur.com/6ww0UPN.jpg",
  },
  {
    title: "Chicas Tecnológicas",
    cloud_image_url:
      "https://i.imgur.com/zTOZo2K.jpg",
  },
  {
    title: "Grupo de Tecnologia",
    cloud_image_url:
      "https://i.imgur.com/mAPNkqw.jpg",
  },
  {
    title: "Área de Ingeniería- Principio de Diseño",
    cloud_image_url:
      "https://i.imgur.com/9HfR0oa.jpg",
  },
  {
    title: "Despedida de los estudiantes ",
    cloud_image_url:
      "https://i.imgur.com/ppfQic1.jpg",
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
      <div className="image-list-container" align="center">
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
      <Testimonials testimonialImages={testimonialImages} />
    </div>
    </div>
  );
}