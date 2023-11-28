import axios from 'axios'

export const getMemoryContent = ()=>{
    return axios.get('http://127.0.0.1:8000/content/api/year-grouped-image/',{
        params:{
            section: 'Memorias'
            
        }

    })
}