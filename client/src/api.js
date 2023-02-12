import axios from 'axios'

const Server = axios.create({
    baseURL: `http://localhost:8082`
})

const translate = async (text, from ,to) => {
    const {data} = await Server.post('/translate', {
        text,
        from,
        to
    })
    
    return data
}

const API = {
    translate
}

export default API