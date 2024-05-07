import axios from 'axios';

const instance = axios.create({ baseURL: 'https://tobbit.onrender.com/api' });

const allArticles = instance.get('/articles?limit=100');

function getArticleById(articleId) {
	return axios
		.get(`https://tobbit.onrender.com/api/articles/${articleId}`)
		.then((response) => {
			return response;
		});
}

function getCommentsByArticleID(articleId) {
	return axios
		.get(`https://tobbit.onrender.com/api/articles/${articleId}/comments`)
		.then((response) => {
			return response;
		});
}

export { allArticles, getArticleById, getCommentsByArticleID };
