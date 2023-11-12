import * as React from "react";
import { Typography } from "@mui/material";
import { ControlledAccordions } from "../components/DropDown";
import { SwipeableTextMobileStepper } from "../components/Carousel";
import Box from "@mui/material/Box";

const containerStyle = {
  display: 'flex',
  alignItems: 'center',
  marginBottom: '50px',
};

const DropDownStyle = {
  display: 'block',
  alignItems: 'center',
  margin: '50px',
};

export function MemoryPage() {
  return (

    <div style={DropDownStyle} >
      <div style={containerStyle}>
        <Typography variant="h2" color={"#1c21d1"}>|</Typography>
        <Typography variant="h3">  Memorias</Typography>
      </div>
      <ControlledAccordions /> { }
    </div>
  );
}
