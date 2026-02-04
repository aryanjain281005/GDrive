// Axios instance configuration
const Axios = require('axios');

const axiosInstance = Axios.create({
    baseURL: 'http://localhost:5000/api', // Adjust the base URL as needed
    timeout: 10000, // 10 seconds timeout
    headers: {
        'Content-Type': 'application/json',
    },
});

module.exports = axiosInstance;
