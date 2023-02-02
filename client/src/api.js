import axios from 'axios'
import OPENAIAPI from './api-openai'

const Server = axios.create({
    baseURL: `http://localhost:8082/api`
  })

const translate = async (text, from ,to) => {
    //const data = await Server.post('translate', text)
    //return data
    const {data} = await OPENAIAPI.translate(text, from ,to)
    console.log(data);
    return data['choices'][0]['text']
}

const API = {
    translate
}

export default API