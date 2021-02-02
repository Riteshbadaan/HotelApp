import axios from 'axios'

const instance = axios.create({
    baseURL:"https://hotelapp-f223c.firebaseio.com/"
})

export default instance;