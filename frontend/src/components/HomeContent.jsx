import { useEffect, useState } from "react";
import { getHomeContent } from "../api/home.api";
import { getHomeCarouselContent } from "../api/home.api";
import { getHomeTestimonialsContent } from "../api/home.api";
import { getHomeYouthInSTEM } from "../api/home.api";

//Que hacemos
const HomeData = () => {
  const [QueHacemos, setQueHacemosData] = useState([]);

  useEffect(() => {
    const controller = new AbortController();
    async function loadHome() {
      const res = await getHomeContent({ signal: controller.signal });
      setQueHacemosData(res.data);
    }
    loadHome();

    return () => {
      controller.abort();
    };
  }, []);

  return QueHacemos;
};

//jovenes en stem descripción
const HomeText = () => {
  const [youthInStemData, setHomeTextData] = useState([]);

  useEffect(() => {
    const controller = new AbortController();
    async function loadHomeText() {
      const res = await getHomeYouthInSTEM({ signal: controller.signal });
      setHomeTextData(res.data);
    }
    loadHomeText();

    return () => {
      controller.abort();
    };
  }, []);

  return youthInStemData;
};

//home carousel
const CarouselImages = () => {
  const [imagesData, setImagesData] = useState([]);

  useEffect(() => {
    const controller = new AbortController();
    async function loadImage() {
      const res = await getHomeCarouselContent({ signal: controller.signal });
      setImagesData(res.data);
    }
    loadImage();

    return () => {
      controller.abort();
    };
  }, []);

  return imagesData;
};

const testimonialsContent = () => {
  const [testimonialsData, setTestimonialsData] = useState([]);

  useEffect(() => {
    const controller = new AbortController();
    async function loadTestimonials() {
      const res = await getHomeTestimonialsContent({
        signal: controller.signal,
      });
      setTestimonialsData(res.data);
    }
    loadTestimonials();

    return () => {
      controller.abort();
    };
  }, []);

  return testimonialsData;
};

export { HomeData, HomeText, CarouselImages, testimonialsContent };
