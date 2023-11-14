import * as React from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import { SwipeableTextMobileStepper } from "../components/Carousel";

const images = [
  {
    cloud_image_url:
      "https://drive.google.com/uc?export=view&id=1dgYvDQDVNXclU_IbV9Uh7Dhl0D_lgFLs",
  },
  {
    cloud_image_url:
      "https://drive.google.com/uc?export=view&id=1bJx9W3s67PA2Gh8SRFXhrioYS5ZsZ02i",
  },
  {
    cloud_image_url:
      "https://drive.google.com/uc?export=view&id=1x2Un4ojzWWfqMvuZQZVrC7iXpxn4HkZv",
  },
  {
    cloud_image_url:
      "https://drive.google.com/uc?export=view&id=1eIYdGZycMg-bqxXcALr98oVr7yfSDfmG",
  },
  {
    cloud_image_url:
      "https://drive.google.com/uc?export=view&id=1v9fMIq2YJIAGNyVdlQ-dANaP7mqhwJMX",
  },
  {
    cloud_image_url:
      "https://drive.google.com/uc?export=view&id=1GWV-xtq3Ao2OFNr9Epi1XjmrItkYHR8R",
  },
  {
    cloud_image_url:
      "https://drive.google.com/uc?export=view&id=1yiUHe59N9eLPNcETyaNiRnwFazoigjZX",
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
      <Typography id="tittle-history">Nuestra Historia</Typography>
      <div id="paragraph-history">
        <p>Technogirl nació en el año lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum </p>
        
        <p>Desde un principio nuestro objetivo ha sido lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum </p>
      </div>
    </div>
  );
}
