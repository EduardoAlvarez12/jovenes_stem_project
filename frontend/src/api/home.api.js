import axios from 'axios'

const API_BASE_URL = import.meta.env.VITE_DJANGO_API_BASE_URL;

export const getHomeContent = () => {
    return axios.get(`${API_BASE_URL}/images/`, {
        params: {
            section: 'Inicio-Que-Hacemos'
        }
    })
}

export const getHomeCarouselContent = () => {
    return axios.get(`${API_BASE_URL}/images/`, {
        params: {
            section: 'Inicio-Carrusel'
        }
    })
}

export const getHomeYouthInSTEM = () => {
    return axios.get(`${API_BASE_URL}/text-contents-only/`, {
        params: {
            section: 'Inicio-Jovenes-En-STEM'
        }
    })
}

export const getHomeTestimonialsContent = () => {
    return axios.get(`${API_BASE_URL}/images/`, {
        params: {
            section: 'Inicio-Voces-Participantes'
        }
    })
}