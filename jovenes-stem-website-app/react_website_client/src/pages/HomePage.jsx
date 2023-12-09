import * as React from "react";
import Button from "@mui/material/Button";
import { SwipeableTextMobileStepper } from "../components/Carousel";
import Box from "@mui/material/Box";
import { Container, Typography } from "@mui/material";
import { ImageMasonry } from "../components/Masonry";
import { CarouselImages, testimonialsContent } from "../components/HomeContent";
import { Testimonials } from "../components/Testimonials";

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
