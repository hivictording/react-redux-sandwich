import axios from 'axios'

const axiosLocal = axios.create({
    baseURL:'http://192.168.2.54:3000/'
});

export default axiosLocal;