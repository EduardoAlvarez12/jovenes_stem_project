import * as React from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import { SwipeableTextMobileStepper } from "../components/Carousel";
import {
  HistoryText,
  HistoryImages,
  HistoryTextOurHistory,
} from "../components/HistoryContent";

export function HistoryPage() {
  const { years, data } = HistoryText();
  const images = HistoryImages();
  const ourHistoryData = HistoryTextOurHistory();

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
      <div id="paragraph-big">
        {ourHistoryData.length > 0 &&
          ourHistoryData.map((item, index) => <p key={index}>{item.text}</p>)}
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
