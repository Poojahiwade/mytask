import axios from 'axios'
import { API_URL } from '../util/API_URL'

let getAllPro = async () =>{
    let response = await axios.get(`${API_URL}`)
    return response.data;
    // console.log(response.data)
}

export {getAllPro}