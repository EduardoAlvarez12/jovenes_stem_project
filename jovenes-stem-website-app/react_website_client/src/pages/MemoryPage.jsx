import * as React from "react";
import { Typography } from "@mui/material";
import { ControlledAccordions } from "../components/DropDown";


const containerStyle = {
  display: 'flex',
  alignItems: 'center',
  marginTop: '50px',
  margin: '30px',
};

const DropDownStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginLeft: '320px',
  marginRight: '100px',
  marginTop: '10px',
};

export function MemoryPage() {
  return (

    <div>
      <div style={containerStyle}>
        <Typography variant="h2" color={"#1c21d1"}>|</Typography>
        <Typography variant="h3">  Memorias</Typography>
      </div>
      <div style={DropDownStyle} >
        <ControlledAccordions /> { }
      </div>
    </div>
  );
}
