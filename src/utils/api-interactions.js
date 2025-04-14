import axios from "axios";
const instance = axios.create({ baseURL: "https://tobbit.onrender.com/api" });

const allArticles = instance.get("/articles", {
    params: { limit: 100 },
});

async function getArticles(sortCategory = "created_at", ascOrDesc = "desc", topic) {
    return axios
        .get("https://tobbit.onrender.com/api/articles", {
            params: { limit: 100, topic, sort_by: sortCategory, order: ascOrDesc },
        })
        .then((response) => {
            return response;
        });
}

async function getArticleById(articleId) {
    return axios.get(`https://tobbit.onrender.com/api/articles/${articleId}`).then((response) => {
        return response;
    });
}

async function getCommentsByArticleID(articleId) {
    return axios
        .get(`https://tobbit.onrender.com/api/articles/${articleId}/comments`)
        .then((response) => {
            return response;
        });
}

async function postComment(commentToPost, articleId) {
    return axios.post(
        `https://tobbit.onrender.com/api/articles/${articleId}/comments`,
        commentToPost
    );
}

async function deleteComment(commentId) {
    return axios.delete(`https://tobbit.onrender.com/api/comments/${commentId}`);
}

async function patchVotesByArticleId(voteChange, articleId) {
    return axios.patch(`https://tobbit.onrender.com/api/articles/${articleId}`, {
        inc_votes: voteChange,
    });
}

async function patchVotesByCommentId(voteChange, commentId) {
    return axios.patch(`https://tobbit.onrender.com/api/comments/${commentId}`, {
        inc_votes: voteChange,
    });
}

async function getTopics() {
    return axios.get("https://tobbit.onrender.com/api/topics").then((response) => {
        return response;
    });
}

async function getUser(username) {
    return axios.get(`https://tobbit.onrender.com/api/users/${username}`).then((response) => {
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
    getUser,
};
