import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Box from '@mui/material/Box';
import { SwipeableTextMobileStepper } from "../components/Carousel";

export function ControlledAccordions() {
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <div>
            <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                >
                    <Typography variant="h6">2016</Typography>
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
                        <SwipeableTextMobileStepper images={images0} />
                    </Box>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2bh-content"
                    id="panel2bh-header" >
                    <Typography variant="h6">2017</Typography>
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
                        <SwipeableTextMobileStepper images={images1} />
                    </Box>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel3bh-content"
                    id="panel3bh-header"
                >
                    <Typography variant="h6">2018</Typography>
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
                        <SwipeableTextMobileStepper images={images2} />
                    </Box>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel4bh-content"
                    id="panel4bh-header"
                >
                    <Typography variant="h6">2019</Typography>
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
                        <SwipeableTextMobileStepper images={images3} />
                    </Box>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel5bh-content"
                    id="panel5bh-header"
                >
                    <Typography variant="h6">2020</Typography>
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
                        <SwipeableTextMobileStepper images={images4} />
                    </Box>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel6'} onChange={handleChange('panel6')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel6bh-content"
                    id="panel6bh-header"
                >
                    <Typography variant="h6">2021</Typography>
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
                        <SwipeableTextMobileStepper images={images5} />
                    </Box>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel7'} onChange={handleChange('panel7')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel7bh-content"
                    id="panel7bh-header"
                >
                    <Typography variant="h6">2022</Typography>
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
                        <SwipeableTextMobileStepper images={images6} />
                    </Box>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel8'} onChange={handleChange('panel8')} >
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel8bh-content "
                    id="panel8bh-header"
                >
                    <Typography variant="h6">2023</Typography>
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
                        <SwipeableTextMobileStepper images={images7} />
                    </Box>
                </AccordionDetails>
            </Accordion>
        </div>
    );
}
const images0 = [
    {
        title: "TecnoGirls 2016",
        cloud_image_url:
            "https://i.imgur.com/tTpdEcT.png",
        },
    {
        title: "TecnoGirls 2016",
        cloud_image_url:
            "https://i.imgur.com/xT7Y2OJ.png",
    },
    {
        title: "TecnoGirls 2016",
        cloud_image_url:
            "https://i.imgur.com/S2MSm6x.png",
    },
    {
        title: "TecnoGirls 2016",
        cloud_image_url:
            "https://i.imgur.com/vpU0dCo.png",
    },
    {
        title: "TecnoGirls 2016",
        cloud_image_url:
            "https://i.imgur.com/n0epBxc.png",
    },
    {
        title: "TecnoGirls 2016",
        cloud_image_url:
            "https://i.imgur.com/I8fgQab.png",
    },

];

const images1= [
    {
        title: "TecnoGirls 2017",
        cloud_image_url:
            "https://i.imgur.com/jOb5e2b.png",
        },
    {
        title: "TecnoGirls 2017",
        cloud_image_url:
           "https://i.imgur.com/deFUc84.png",
    },

    {
        title: "TecnoGirls 2017",
        cloud_image_url:
            "https://i.imgur.com/HkYOll4.png",
    },
    {
        title: "TecnoGirls 2017",
        cloud_image_url:
            "https://i.imgur.com/41LXixT.png",
    },

    {
        title: "TecnoGirls 2017",
        cloud_image_url:
            "https://i.imgur.com/tPuemWL.png",
    },

    {
        title: "TecnoGirls 2017",
        cloud_image_url:
            "https://i.imgur.com/tReaJCk.png",
    },
];

const images2 = [
    {
        title: "TecnoGirls 2018",
        cloud_image_url:
            "https://i.imgur.com/ZcWDQgA.png",
        },
    {
        title: "TecnoGirls 2018",
        cloud_image_url:
            "https://i.imgur.com/L6uVL8C.png",
    },
    {
        title: "TecnoGirls 2018",
        cloud_image_url:
            "https://i.imgur.com/9qfnqCD.png",
    },
    {
        title: "TecnoGirls 2018",
        cloud_image_url:
            "https://i.imgur.com/lAvNDNP.png",
    },
];

const images3 = [
    {
        title: "TecnoGirls 2019",
        cloud_image_url:
            "https://i.imgur.com/AaiEO41.png",
        },
    {
        title: "TecnoGirls 2019",
        cloud_image_url:
            "https://i.imgur.com/FyxPW4D.png",
    },
    {
        title: "TecnoGirls 2019",
        cloud_image_url:
            "https://i.imgur.com/kqYvIZl.png",
    },
    {
        title: "TecnoGirls 2019",
        cloud_image_url:
            "https://i.imgur.com/of7qIIc.png",
    },
    {
        title: "TecnoGirls 2019",
        cloud_image_url:
            "https://i.imgur.com/Z9H7ONN.png",
    },
    {
        title: "TecnoGirls 2019",
        cloud_image_url:
            "https://i.imgur.com/bgrJRIj.png",
    },
];

const images4 = [
    {
        title: "TecnoGirls 2020",
        cloud_image_url:
            "https://i.imgur.com/J1ff06A.png",
        },
    {
        title: "TecnoGirls 2020",
        cloud_image_url:
            "https://i.imgur.com/fmIntnz.png",
    },
    {
        title: "TecnoGirls 2020",
        cloud_image_url:
            "https://i.imgur.com/clmml8r.png",
    },
    {
        title: "TecnoGirls 2020",
        cloud_image_url:
            "https://i.imgur.com/mhsGlUQ.png",
    },
    {
        title: "TecnoGirls 2020",
        cloud_image_url:
            "https://i.imgur.com/3p8wWeU.png",
    },
];

const images5 = [
    {
        title: "TecnoGirls 2021",
        cloud_image_url:
            "https://i.imgur.com/xwXqIcx.png",
        },
    {
        title: "TecnoGirls 2021",
        cloud_image_url:
            "https://i.imgur.com/PvmKqHV.png",
    },
    {
        title: "TecnoGirls 2021",
        cloud_image_url:
            "https://i.imgur.com/8AW59ig.png",
    },
    {
        title: "TecnoGirls 2021",
        cloud_image_url:
            "https://i.imgur.com/1g4W6Xk.png",
    },
    {
        title: "TecnoGirls 2021",
        cloud_image_url:
            "https://i.imgur.com/8R06zLT.png",
    },
    {
        title: "TecnoGirls 2021",
        cloud_image_url:
            "https://i.imgur.com/e0TZmd8.png",
    },
];

const images6 = [
    {
        title: "TecnoGirls 2022",
        cloud_image_url:
            "https://i.imgur.com/j544m5l.png",
        },
    {
        title: "TecnoGirls 2022",
        cloud_image_url:
            "https://i.imgur.com/XfwT0eo.png",
    },
    {
        title: "TecnoGirls 2022",
        cloud_image_url:
            "https://i.imgur.com/mq3JAbP.png",
    },
    {
        title: "TecnoGirls 2022",
        cloud_image_url:
            "https://i.imgur.com/HcX6OQ9.png",
    },
    {
        title: "TecnoGirls 2022",
        cloud_image_url:
            "https://i.imgur.com/NhFUkHu.png",
    },
    {
        title: "TecnoGirls 2022",
        cloud_image_url:
            "https://i.imgur.com/kzQs6oM.png",
    },
];

const images7= [
    {
        title: "TecnoGirls y Jóvenes en STEM 2023",
        cloud_image_url:
            "https://i.imgur.com/giYp5u0.jpg",
        },
    {
        title: "TecnoGirls y Jóvenes en STEM 2023",
        cloud_image_url:
            "https://i.imgur.com/NeV1ZMa.jpg",
    },

    {
        title: "TecnoGirls y Jóvenes en STEM 2023",
        cloud_image_url:
            "https://i.imgur.com/1ylXjZR.jpg",
    },
    {
        title: "TecnoGirls y Jóvenes en STEM 2023",
        cloud_image_url:
            "https://i.imgur.com/hyd4sXU.jpg?2",
    },

    {
        title: "TecnoGirls y Jóvenes en STEM 2023",
        cloud_image_url:
            "https://i.imgur.com/GDCtDFU.png",
    },

    {
        title: "TecnoGirls y Jóvenes en STEM 2023",
        cloud_image_url:
            "https://i.imgur.com/8b1H103.png",
    },
];