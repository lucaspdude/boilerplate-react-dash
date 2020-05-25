import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:9000/api',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin':'*',
      },

});

export default api;
