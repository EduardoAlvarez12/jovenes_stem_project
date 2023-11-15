import * as React from 'react';
import { Container, Typography,Card,CardContent,CardMedia,Box,Grid, CardActionArea } from "@mui/material";

const HistoryText = () => {
  const historyData = [
    {
      year: 2016,
      text: 'El Curso impartido en la primera edición del programa fue IT Essentials (Fundamentos de Tecnologías Informáticas, TI), de la Academia CISCO que posee reconocimiento a nivel nacional e internacional, con este curso se tenía por objetivo desarrollar las destrezas informáticas fundamentales para empleos en TI.\r\n\r\nEl sábado 7 de enero de 2017 se realizó el acto de graduación de la primera promoción del programa. Al final se entregaron los diplomas de participación y como un premio por el esfuerzo y dedicación brindados en el proceso de entrenamiento, la UGB entregó una beca completa a la estudiante Diana Hernández.',
      images: ['https://drive.google.com/uc?export=view&id=1d5Vl4L05FYZeiNpI-_Lv3BaViK-Fqfzn', 'https://drive.google.com/uc?export=view&id=1rgZDvAy0jyaHsWufja7YkL21PaKgAy5s', 'https://drive.google.com/uc?export=view&id=1IMNBTGCVBWgFqWIzSRTqWjhbwhLOQPkF'],
    },
    {
      year: 2017,
      text: 'Se impartió un Curso sobre Fundamentos de Tecnologías Informáticas, el mismo curso del año anterior, que tiene por objetivo fortalecer las destrezas informáticas, incluyendo prácticas de laboratorio, que proporcionan experiencia real para instalar, configurar y solucionar problemas de computadores y otros dispositivos electrónicos. También se llevó a cabo una feria de logros el 26 de agosto del mismo año, donde las jóvenes pusieron a prueba sus conocimientos adquiridos de Programación con Arduino.\r\n\r\nEl jueves 21 de diciembre de 2017 se realizó la clausura de la segunda promoción del programa. Se otorgaron becas a las jóvenes que finalizaron el programa ese día, para que pudieran ser partes de la primera promoción de la carrera Ingeniería en Manejo y Gestión de Bases de Datos.',
      images: ['https://drive.google.com/uc?export=view&id=1BTpqyPMUxVl4qAAULg0kPHRWM78vpkGy', 'https://drive.google.com/uc?export=view&id=18UiOFhcasSh9KalM4tVxOMhtdl5UeYrc', 'https://drive.google.com/uc?export=view&id=1YN5FVLib2Oi69vej6lvh4m2nwSlcd33Q'],
    },
    {
      year: 2018,
      text: 'Para esta tercera promoción del programa TecnoGirls se impartió de igual forma que en promociones pasadas, el Curso sobre Fundamentos de Tecnologías Informáticas, para brindar oportunidades a las jóvenes de introducirse en carreras relacionadas con la tecnología e informática.\r\n\r\nEl jueves 13 de diciembre de 2018 se realizó la clausura de la tercera promoción del programa. Se otorgó una beca a Maryori Hernández , quien demostró más dedicación y esfuerzo dentro el curso, para que tuviera la oportunidad de estudiar una carrera dentro del área de tecnología.',
      images: ['https://drive.google.com/uc?export=view&id=1L8-DBLVCZXaBf9BT27yLmHNfXWIGD0Qb'],
    },
    {
      year: 2019,
      text: 'Se impartió el Curso sobre Fundamentos de Tecnologías Informáticas, pero en este año también se incluyó el contenido de Emprendimiento Tecnológico, para desarrollar nuevos conocimientos en las jóvenes participantes basado en las nueva tecnologías.\r\n\r\nEl miércoles 20 de noviembre de 2019 se realizó la clausura de la cuarta promoción del programa, se entregó la beca a la joven Ana Iveth Ulloa, quién demostró un desempeño sobresaliente dentro del curso, y se le brindó la oportunidad de estudiar una carrera dentro del área de tecnología.',
      images: ['https://drive.google.com/uc?export=view&id=165-werOSfJmLnFqXoH2Y-q7H_8gOIhBr', 'https://drive.google.com/uc?export=view&id=1hCHc94hIBYsKkDe3ttZxAgnmmXcfOqWK', 'https://drive.google.com/uc?export=view&id=1R1ORN1x_ikZ28vz90uznCgtzgnjZV_5N'],
    },
    {
      year: 2020,
      text: 'Para esta edición del programa el Curso sobre Fundamentos de Tecnologías Informáticas fue impartido de forma virtual por motivos de pandemia por covid-19, esto con ayuda de las herramientas brindadas por la Universidad Gerardo Barrios.\r\n\r\nEl miércoles 23 de diciembre de 2020 se llevó a cabo la clausura de la quinta promoción del programa, y así como los cursos, se realizó de forma completamente virtual, se realizó la entrega de los diplomas de reconocimiento a las participantes que finalizaron el curso, y junto con ello fueron entregados los dos diplomas a las ganadoras de las becas institucionales. Las ganadoras fueron Merary Velásquez y Nathaly Rodríguez.',
      images: ['https://drive.google.com/uc?export=view&id=1VDjqTUmICfQCHeDWe8CpKFnPbGls2e2k'],
    },
    {
      year: 2021,
      text: 'Se impartió el Curso sobre Fundamentos de Tecnologías Informáticas, dentro de este curso se incluyó el contenido de diseño gráfico y un de orientación hacia el pensamiento de emprendimiento, para así dar la oportunidad a las jóvenes de generar ideas que puedan lanzarse al mercado. En esta promoción del programa se presentó por primera vez la modalidad no presencial, permitiéndole participar a las jóvenes que no pudieran viajar hacia a la universidad.\r\n\r\nEl sábado 27 de noviembre de 2021 se llevó a cabo la clausura para la promoción TecnoGirls 2021, se realizó la entrega de diplomas de reconocimiento a todos los jóvenes que finalizaron el Curso y se entregaron los diplomas a las ganadoras de la beca completa para estudiar una carrera dentro del área de tecnología, ellas fueron Jassmin Argueta, Lesly Lemus y Reyna Pérez.',
      images: ['https://drive.google.com/uc?export=view&id=1Uw6QOfTWKoTOZUpP53UJ3GbhFkwevYkN', 'https://drive.google.com/uc?export=view&id=1AuS6-5-57ly9JDunGzD6rfnfmCEyy5VD', 'https://drive.google.com/uc?export=view&id=1SnnY2ULAKp02pmjU77hgHnN_tPDWI4MH'],
    },
    {
      year: 2022,
      text: 'Se impartió el Curso sobre Fundamento de Tecnologías Informáticas, también se desarrolló en forma semipresencial, donde los jóvenes podían escoger en qué modalidad decidían participar, dentro de este Curso se impartió un poco sobre el desarrollo de la lógica y también un poco sobre redes de computadoras.\r\n\r\nEl miércoles 21 de diciembre fue realizada la clausura de la promoción TecnoGirls 2022, se realizó la entrega de diplomas de reconocimiento a todos los participantes de culminaron el Curso, y junto con ello, se realizó la entrega de los diplomas con beca completa a Blanca Argueta, Edith Claros, Yohana Villalobos y Genesis Torres, para que puedan estudiar una carrera dentro del área de tecnología en la Universidad Gerardo Barrios.',
      images: ['https://drive.google.com/uc?export=view&id=1P0uRb572Y0jr_syAKOTwRXBsRJTWHahh', 'https://drive.google.com/uc?export=view&id=10OBnIS__3zzzWcBr5iSvwzdynzSNJHu8'],
    },
  ];

  // Obtén solo los años
  const years = historyData.map((item) => item.year);

  // Agrupa los datos por año
  const data = historyData.reduce((acc, item) => {
    acc[item.year] = { text: item.text, images: item.images };
    return acc;
  }, {});

  return { years, data };
};

export default HistoryText;
