import * as React from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import { SwipeableTextMobileStepper } from "../components/Carousel";
import { HistoryText, HistoryImages } from "../components/HistoryContent";

export function HistoryPage() {
  const { years, data } = HistoryText();
  const images = HistoryImages();

  return (
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
      <Typography id="title-history">Nuestra Historia</Typography>
      <div id="paragraph-history">
        <p>
          Jóvenes en STEM nació en el año 2016 bajo el nombre de Tecnogirls, un
          proyecto con el objetivo de motivar el talento por la tecnología y la
          innovación en estudiantes del género femenino que estén a punto de
          iniciar sus estudios universitarios.
        </p>
        <p>
          Actualmente, Jóvenes en STEM continúa en ejecución con nuevos
          participantes cada año indistintamente de su género desde el año 2023.
        </p>
        <p>
          Este proyecto es promovido a través de la Facultad de Ciencia y
          Tecnología y está orientado a potenciar el interés por la ciencia, la
          tecnología, la ingeniería y las matemáticas entre jóvenes estudiantes,
          sin importar su género. El programa busca ofrecer una plataforma
          inclusiva donde todos los participantes puedan desarrollar sus
          habilidades y conocimientos en STEM, fomentando un ambiente de
          igualdad y diversidad.
        </p>
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
                      <img
                        className="history-image"
                        key={index}
                        src={image.cloud_image_url}
                        alt={`Image ${index + 1}`}
                      />
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
                <p
                  className="history-paragraph"
                  style={{ whiteSpace: "pre-wrap" }}
                >
                  {data[year].text}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
