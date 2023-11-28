import * as React from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import { SwipeableTextMobileStepper } from "../components/Carousel";
import { HistoryText, HistoryImages } from '../components/HistoryContent';

export function HistoryPage() {
  const { years, data } = HistoryText();
  const images = HistoryImages();

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
                      <img className="history-image" key={index} src={image.cloud_image_url} alt={`Image ${index + 1}`} />
                    ))}
                  </div>
                ) : (
                  data[year].images.map((image, index) => (
                    <img
                      className="history-image"
                      key={index}
                      src={image.cloud_image_url}
                      alt={`Image ${index + 1}`}
                    />
                  ))
                )}
              </div>

              <div className="paragraphs-container">
                <p className="history-paragraph" style={{ whiteSpace: "pre-wrap"}}>{data[year].text}</p>
              </div>
            </div>

          </div>
        ))}
      </div>
    </div>

  );
}
