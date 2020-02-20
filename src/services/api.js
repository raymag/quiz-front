import axios from 'axios';

const api = axios.create({
    baseURL: 'https://maquiz-api.herokuapp.com'
});

export default api;