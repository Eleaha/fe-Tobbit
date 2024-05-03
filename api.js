function getArticles(){
    return axios.get(`https://tobbit.onrender.com/api/articles`).then((data) => {
        console.log(data)
    })
}