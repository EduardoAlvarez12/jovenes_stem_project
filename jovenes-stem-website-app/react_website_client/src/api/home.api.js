import axios from 'axios'

export const getHomeContent = () => {
    return axios.get('http://127.0.0.1:8000/content/api/images/', {
        params: {
            section: 'Inicio-Que-Hacemos'
        }
    })
}