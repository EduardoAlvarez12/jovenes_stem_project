import axios from 'axios'

const API_BASE_URL = import.meta.env.VITE_DJANGO_API_BASE_URL;

export const getHistoryContent = () => {
    return axios.get(`${API_BASE_URL}/text-contents`, {
        params: {
            section: 'Historia-Año'
        }
    })
}

export const getHistoryCarouselContent = () => {
    return axios.get(`${API_BASE_URL}/images/`, {
        params: {
            section: 'Historia-Carrusel'
        }
    })
}

export const getHistoryOurHistory = () => {
    return axios.get(`${API_BASE_URL}/text-contents-only/`, {
        params: {
            section: 'Historia-Nuestra-Historia'
        }
    })
}