import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://tinder-backend-khan.herokuapp.com',
});

export default instance;