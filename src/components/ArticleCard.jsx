import styles from "./css/articleCard.module.css"

function ArticleCard({article}){
    console.log(article.title)
    return (
        <li key={article.article_id} className="article-card">
            <h2>{article.title}</h2>
            <h3>{article.author}</h3>
            <h3>{article.created_at}</h3>
            <div>
                <p>{article.votes}</p>
            </div>
            <div className="article-img-wrapper">
                <img className="article-img" src={article.article_img_url}/>
            </div>
        </li>
    )
}

export default ArticleCard
