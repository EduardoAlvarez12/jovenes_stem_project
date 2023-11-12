import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Box from '@mui/material/Box';
import { SwipeableTextMobileStepper } from "../components/Carousel";

export function ControlledAccordions() {
    const groupedData = [
        { year: 2016, images: año_2016 },
        { year: 2017, images: año_2017 },
        { year: 2018, images: año_2018 },
        { year: 2019, images: año_2019 },
        { year: 2020, images: año_2020 },
        { year: 2021, images: año_2021 },
        { year: 2022, images: año_2022 },
        { year: 2023, images: año_2023 },
    ];

    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <Box sx={{ width: '100%'}}>
            {groupedData.map(({ year, images }, index) => (
                <Accordion
                    key={index}
                    expanded={expanded === `panel${index + 1}`}
                    onChange={handleChange(`panel${index + 1}`)}
                    style={{ width: '80%', margin: 'auto', }}
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


const año_2016 = [
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

const año_2017 = [
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

const año_2018 = [
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

const año_2019 = [
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

const año_2020 = [
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

const año_2021 = [
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

const año_2022 = [
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

const año_2023 = [
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