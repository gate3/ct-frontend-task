const axios = require('axios');

const {REACT_APP_API_BASE_URL} = process.env;

const httpRequestInstance = axios.create({
    baseURL: REACT_APP_API_BASE_URL,
});

export default httpRequestInstance;
