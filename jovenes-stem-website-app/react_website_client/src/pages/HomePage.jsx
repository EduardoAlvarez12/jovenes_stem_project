import * as React from "react";
import Button from "@mui/material/Button";
import { SwipeableTextMobileStepper } from "../components/Carousel";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import {ImageMasonry} from "../components/Masonry";
import {CarouselImages} from "../components/HomeContent";
import { Testimonials } from "../components/Testimonials";



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

  const images = CarouselImages();
  
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
      <ImageMasonry />
      <Box sx={{ p: 1, borderLeft: 4, borderColor:'#1c21d1'}}>
        <Typography variant="h3"  style={{ fontWeight: '600' }} marginLeft={4}>Casos de Éxito</Typography> 
        </Box> 
      <Testimonials testimonialImages={testimonialImages} />
    </div>
  );
}