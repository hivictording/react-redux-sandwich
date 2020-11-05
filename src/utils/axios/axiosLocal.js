import axios from 'axios'

const axiosLocal = axios.create({
    baseURL:'http://localhost:3000/'
});

export default axiosLocal;