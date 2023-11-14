import * as React from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import { SwipeableTextMobileStepper } from "../components/Carousel";
import HistoryText from '../components/HistoryText';

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
  const { years, data } = HistoryText();
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
      <Typography id="title-history">Nuestra Historia</Typography>
      <div id="paragraph-history">
        <p>TecnoGirls nació en el año 2016 y actualmente continua en ejecución con nuevos participantes cada año, este proyecto es promovido a través de la Facultad de Ciencia y Tecnología y está orientado a descubrir y motivar el talento por la tecnología y la innovación en mujeres jóvenes que estén a punto de iniciar sus estudios universitarios.</p>

        <p>Este programa tiene por objetivo motivar el talento en la tecnología e innovación en las mujeres jóvenes que estén a punto de iniciar sus estudios universitarios y fortalecer en el proceso, sus competencias dentro del área de tecnología e informática.</p>
      </div>

      <div className="years-container">
        {years.map((year) => (
          <div key={year}>

            <h2 className="history-title">{year}</h2>

            <div className="container">
              <div className="history-image-container">
                {data[year].images.length > 1 ? (
                  <div className="history-image-list">
                    {data[year].images.map((image, index) => (
                      <img className="history-image" key={index} src={image} alt={`Image ${index + 1}`} />
                    ))}
                  </div>
                ) : (
                  data[year].images.map((image, index) => (
                    <img
                      key={index}
                      src={image}
                      alt={`Image ${index + 1}`}
                      className="history-image"
                    />
                  ))
                )}
              </div>

              <div className="paragraphs-container">
                <p className="history-paragraph">{data[year].paragraphs1}</p>
                <p className="history-paragraph">{data[year].paragraphs2}</p>
              </div>
            </div>

          </div>
        ))}
      </div>
    </div>

  );
}
