import axios from 'axios'

export const getHistoryContent = () => {
    return axios.get('http://127.0.0.1:8000/content/api/text-contents', {
        params: {
            section: 'Historia-Año'
        }
    })
}