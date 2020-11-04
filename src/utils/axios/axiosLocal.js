import axios from 'axios'

const axiosLocal = axios.create({
    baseURL:'http://localhost:3009/'
});

export default axiosLocal;