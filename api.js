import axios from 'axios';

const instance = axios.create({ baseURL: 'https://tobbit.onrender.com/api' });

const allArticles = instance.get('/articles', {
	params: { limit: 100 },
});

function getArticles(sortCategory = 'created_at', ascOrDesc = 'desc', topic) {
	return axios
		.get('https://tobbit.onrender.com/api/articles', {
			params: { limit: 100, topic, sort_by: sortCategory, order: ascOrDesc },
		})
		.then((response) => {
			return response;
		});
}

function getArticleById(articleId) {
	return axios
		.get(`https://tobbit.onrender.com/api/articles/${articleId}`)
		.then((response) => {
			return response;
		});
}

function getArticlesByTopic(topic) {
	return axios
		.get('https://tobbit.onrender.com/api/articles', {
			params: { topic, limit: 100 },
		})
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

function postComment(commentToPost, articleId) {
	return axios.post(
		`https://tobbit.onrender.com/api/articles/${articleId}/comments`,
		commentToPost
	);
}

function deleteComment(commentId) {
	return axios.delete(`https://tobbit.onrender.com/api/comments/${commentId}`);
}

function patchVotesByArticleId(voteChange, articleId) {
	return axios.patch(`https://tobbit.onrender.com/api/articles/${articleId}`, {
		inc_votes: voteChange,
	});
}

function patchVotesByCommentId(voteChange, commentId) {
	return axios.patch(`https://tobbit.onrender.com/api/comments/${commentId}`, {
		inc_votes: voteChange,
	});
}

function getTopics() {
	return axios
		.get('https://tobbit.onrender.com/api/topics')
		.then((response) => {
			return response;
		});
}

export {
	allArticles,
	getArticles,
	getArticleById,
	getCommentsByArticleID,
	patchVotesByArticleId,
	patchVotesByCommentId,
	postComment,
	deleteComment,
	getTopics,
	getArticlesByTopic,
};
