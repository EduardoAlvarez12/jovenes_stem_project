import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

export function SwipeableTextMobileStepper({ images }) {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <Box sx={{ width: "100%", flexGrow: 1, mx: "auto" }}>
      { }

      <AutoPlaySwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {images.map((step, index) => (
          <div key={step.title}>
            {Math.abs(activeStep - index) <= 2 ? (
              <Box
                component="div"
                sx={{
                  position: "auto",
                  overflow: "hidden",
                  width: "60%",
                  margin: "auto",
                }}
              >
                <img
                  src={step.cloud_image_url}
                  alt={step.title}
                  style={{
                    display: "block",
                    width: "100%",
                  }}
                />
                <Typography
                  variant="caption"
                  display="block"
                  gutterBottom
                  sx={{
                    position: "absolute",
                    bottom: "10px",
                    left: "10px",
                    color: "white",
                    backgroundColor: "rgba(0, 0, 0, 0.5)",
                    padding: "5px",
                  }}
                >
                  {step.title}
                </Typography>
              </Box>
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
    </Box>
  );
}
