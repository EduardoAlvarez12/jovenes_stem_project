import * as React from "react";
import Button from "@mui/material/Button";
import { SwipeableTextMobileStepper } from "../components/Carousel";
import Box from "@mui/material/Box";
import { Container, Typography } from "@mui/material";
import { ImageMasonry } from "../components/Masonry";
import { CarouselImages, testimonialsContent } from "../components/HomeContent";
import { Testimonials } from "../components/Testimonials";

// const testimonialImages = [
//   {
//     title: "Shirley Fultz",
//     description:
//       "It's freeing to be able to catch up on customized news and not be distracted by a social media element on the same site",
//     cloud_image_url:
//       "https://cdn1.iconfinder.com/data/icons/user-pictures/100/female1-512.png",
//   },
//   {
//     title: "Daniel Keystone",
//     description:
//       "The simple and intuitive design makes it easy for me use. I highly recommend Fetch to my peers.",
//     cloud_image_url:
//       "https://creazilla-store.fra1.digitaloceanspaces.com/icons/7914838/woman-icon-md.png",
//   },
//   {
//     title: "Theo Sorel",
//     description:
//       "I enjoy catching up with Fetch on my laptop, or on my phone when I'm on the go!",
//     cloud_image_url:
//       "https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-Vector-No-Background.png",
//   },
// ];

export function HomePage() {
  const images = CarouselImages();
  const testimonialsData = testimonialsContent();

  return (
    <div>
      <div>
        <Box
          sx={{
            background:
            "linear-gradient(to right, #eaebff  0%, #131ae4 20%, #131ae4  80%, #eaebff   100%)",
            boxShadow:
              "10px 0 10px -10px rgba(0, 0, 0, 0.3), -10px 0 10px -10px rgba(0, 0, 0, 0.3)",
          }}
        >
          <SwipeableTextMobileStepper images={images} />
        </Box>
      </div>
      <Typography
        variant="h1"
        align="center"
        color="#000000"
        sx={{ fontWeight: "bold", m: 1, fontSize: 55 }}
        paddingTop={7}
      >
        Jóvenes en STEM
      </Typography>
      <Box sx={{ p: 1, borderBottom: 4, borderColor: "#1c21d1", marginLeft:'45%', marginRight:'45%'}}/>
      
        
     
      <ImageMasonry />
      <Container maxWidth="m" style={{ marginTop: "7%" }}>
        <Box sx={{ p: 1, borderLeft: 4, borderColor: "#1c21d1" }}>
          <Typography variant="h3" style={{ fontWeight: "600" }} marginLeft={4}>
            Casos de Éxito
          </Typography>
        </Box>
      </Container>
      <Container maxWidth="lg" style={{ marginBottom: "5%" }}>
        <Testimonials testimonialsData={testimonialsData} />
      </Container>
    </div>
  );
}
