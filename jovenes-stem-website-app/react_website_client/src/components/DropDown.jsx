import * as React from "react";
import { useEffect, useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Box from "@mui/material/Box";
import { SwipeableTextMobileStepper } from "../components/Carousel";
import { getMemoryContent } from "../api/memories.api";

export function ControlledAccordions() {

  const [memoryData, setMemoryData] = useState([]);

  useEffect(() => {
    const controller = new AbortController();
    async function loadMemory() {
      const res = await getMemoryContent({ signal: controller.signal });
      setMemoryData(res.data);
    }
    loadMemory();

    return () => {
      controller.abort();
    };
  }, []);

  const groupedData = memoryData;

  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Box sx={{ width: "100%" }}>
      {groupedData.map(({ year, images }, index) => (
        <Accordion
          key={index}
          expanded={expanded === `panel${index + 1}`}
          onChange={handleChange(`panel${index + 1}`)}
          style={{ width: "80%", margin: "auto" }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`panel${index + 1}bh-content`}
            id={`panel${index + 1}bh-header`}
          >
            <Typography variant="h6">{year}</Typography>
          </AccordionSummary>
          <AccordionDetails>
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
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );
}