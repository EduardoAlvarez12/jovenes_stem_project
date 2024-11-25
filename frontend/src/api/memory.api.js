import axios from 'axios'

const API_BASE_URL = import.meta.env.VITE_DJANGO_API_BASE_URL;

export const getMemoryContent = ()=>{
    return axios.get(`${API_BASE_URL}/year-grouped-image/`,{
        params:{
            section: 'Memorias'       
        }
    })
}