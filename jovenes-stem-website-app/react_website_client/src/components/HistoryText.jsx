import { useEffect, useState } from 'react';
import { Container, Typography,Card,CardContent,CardMedia,Box,Grid, CardActionArea } from "@mui/material";
import { getHistoryContent } from '../api/history.api';

const HistoryText = () => {
  const [historyData, setHistoryData] = useState([]);

  useEffect(() => {
    async function loadHistory() {
      const res = await getHistoryContent();
      setHistoryData(res.data)
    }
    loadHistory();
  })

  // Obtén solo los años
  const years = historyData.map((item) => item.year);

  // Agrupa los datos por año
  const data = historyData.reduce((acc, item) => {
    acc[item.year] = { text: item.text, images: item.images };
    return acc;
  }, {});

  return { years, data };
}

export default HistoryText;