import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export function Footer (){
    return (
        <Box
            component="footer"
            sx={{
                backgroundColor: "#1C21D1",  
                marginTop: '50px',  
            }}
        >
            <Typography variant="body1" sx={{ backgroundColor: "#1C21D1", color: 'white', padding: '1rem', fontWeight: 'bold', marginLeft: '10px'}}>
                {"Contáctenos:"}
            </Typography>

            <Typography variant="body2" sx={{ backgroundColor: "#1C21D1", color: 'white', marginLeft: '30px'}}>
                {"📌 Calle Las Flores y Avenida Las Magnolias, Avenida Colonia Escolan, San Miguel."}
            </Typography>


            <Typography variant="body2" sx={{ backgroundColor: "#1C21D1", color: 'white', padding: '1rem', marginLeft: '10px'}}>
                {"☎️ 2645-6500"}
            </Typography>

            <Typography variant="body2" sx={{ backgroundColor: "#FFFFFF", color: 'black', padding: '1rem', textAlign: 'center', fontWeight: 'bold'}}>
                {"© Universidad Gerardo Barrios | UGB 2023. Derechos reservados."}
            </Typography>
        </Box>
    );
};

export default Footer;