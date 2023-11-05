import * as React from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import { SwipeableTextMobileStepper } from "../components/Carousel";

const images = [
  {
    title: "San Francisco – Oakland Bay Bridge, United States",
    cloud_image_url:
      "https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60",
  },
  {
    title: "Bird",
    cloud_image_url:
      "https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60",
  },
  {
    title: "Bali, Indonesia",
    cloud_image_url:
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250",
  },
  {
    title: "Goč, Serbia",
    cloud_image_url:
      "https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60",
  },
];

export function HistoryPage() {
  return (
    <div>
      <Box
        sx={{
          background:
            "linear-gradient(to right, white 0%, #1c21d1 30%, #1c21d1 70%, white 100%)",
          boxShadow:
            "10px 0 10px -10px rgba(0, 0, 0, 0.3), -10px 0 10px -10px rgba(0, 0, 0, 0.3)",
        }}
      >
        <SwipeableTextMobileStepper images={images} />
      </Box>
      <Typography variant="h1">Nuestra Historia</Typography>
    </div>
  );
}
