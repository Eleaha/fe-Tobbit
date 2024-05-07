import axios from 'axios';

const instance = axios.create({ baseURL: 'https://tobbit.onrender.com/api' });

const allArticles = instance.get('/articles?limit=100');

export default allArticles;
