import * as React from "react";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";
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
    cloud_image_url:"https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-Vector-No-Background.png",
  },
];

export function HomePage() {
  return (
    <div>
      <Typography variant="h1">Inicio</Typography>
      <Testimonials testimonialImages={testimonialImages} />
    </div>
  );
}
