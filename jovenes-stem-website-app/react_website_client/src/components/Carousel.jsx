import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MobileStepper from "@mui/material/MobileStepper";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

export function SwipeableTextMobileStepper({ images }) {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <Box sx={{ width: "50%", flexGrow: 1, mx: "auto" }}>
     
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
                  position: "relative",
                  overflow: "hidden",
                  width: "100%",
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
