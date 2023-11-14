import * as React from "react";
import { Accordion, Typography } from "@mui/material";
import { ControlledAccordions } from "../components/DropDown";
import { SwipeableTextMobileStepper } from "../components/Carousel";


const containerStyle = {
  display: 'flex',
  alignItems: 'center',
  marginTop: '50px',
  margin: '30px',
};

const DropDownStyle = {
  display: 'flex',
  margin: 'auto',
  justifyContent: 'center',
  alignItems: 'center',
  width: '90%',
};

export function MemoryPage() {
  return (

    <div>
      <div style={containerStyle}>
        <Typography variant="h2" color={"#1c21d1"}>|</Typography>
        <Typography id="title-SB">  Memorias</Typography>
      </div>
      <div style={DropDownStyle} >
        <ControlledAccordions /> { }
      </div>
    </div>
  );
}
