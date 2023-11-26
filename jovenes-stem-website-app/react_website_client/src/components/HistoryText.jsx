import { useEffect, useState } from 'react';
import { Container, Typography,Card,CardContent,CardMedia,Box,Grid, CardActionArea } from "@mui/material";
import { getHistoryContent } from '../api/history.api';
import { getHistoryCarouselContent } from '../api/history.api';

const HistoryText = () => {
  const [historyData, setHistoryData] = useState([]);

  useEffect(() => {
    const controller = new AbortController();
    async function loadHistory() {
      const res = await getHistoryContent({ signal: controller.signal });
      setHistoryData(res.data)
    }
    loadHistory();

    return () => {
      controller.abort();
    };
  }, [])

  // Obtén solo los años
  const years = historyData.map((item) => item.year);

  // Agrupa los datos por año
  const data = historyData.reduce((acc, item) => {
    acc[item.year] = { text: item.text, images: item.images };
    return acc;
  }, {});

  return { years, data };
}

const HistoryImages = () => {
  const [imagesData, setImagesData] = useState([]);

  useEffect(() => {
    const controller = new AbortController();
    async function loadImage(){
      const res = await getHistoryCarouselContent({ signal: controller.signal });
      setImagesData(res.data);
    }
    loadImage();

    return () => {
      controller.abort();
    };
  }, [])

  const images = imagesData.map((item) => ({ cloud_image_url: item.cloud_image_url }));

  return images;
};

export { HistoryText, HistoryImages };