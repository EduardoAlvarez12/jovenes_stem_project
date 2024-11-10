import axios from 'axios'

export const getHomeContent = () => {
    return axios.get('http://127.0.0.1:8000/content/api/images/', {
        params: {
            section: 'Inicio-Que-Hacemos'
        }
    })
}

export const getHomeCarouselContent = () => {
    return axios.get('http://127.0.0.1:8000/content/api/images/', {
        params: {
            section: 'Inicio-Carrusel'
        }
    })
}

export const getHomeYouthInSTEM = () => {
    return axios.get('http://127.0.0.1:8000/content/api/text-contents-only/', {
        params: {
            section: 'Inicio-Jovenes-En-STEM'
        }
    })
}

export const getHomeTestimonialsContent = () => {
    return axios.get('http://127.0.0.1:8000/content/api/images/', {
        params: {
            section: 'Inicio-Voces-Participantes'
        }
    })
}