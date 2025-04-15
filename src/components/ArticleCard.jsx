import { Link } from "react-router-dom";
import { formatPreviewText, timestampToDate } from "../utils/utils";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import "../styling/ArticleCard.css";
import { getArticleById } from "../utils/api-interactions";

function ArticleCard({ article }) {
    const [previewText, setPreviewText] = useState(null);

    useEffect(() => {
        if (!article.article_img_url) {
            getArticleById(article.article_id).then(({ data }) => {
                console.log(formatPreviewText(data.article.body));
                setPreviewText(formatPreviewText(data.article.body, 50));
            });
        }
    });

    return (
        <Link to={`/article/${article.article_id}`} className="link">
            <div className="article-card card">
                <h1>{article.title}</h1>
                <h2>{article.author}</h2>
                <h3>{timestampToDate(article.created_at)}</h3>
                <div className="article-card-votes">
                    <p>{article.votes}</p>
                    <span className="material-symbols-outlined filled like-or-dislike-symbol">
                        favorite
                    </span>
                    <p>{article.comment_count}</p>
                    <span className="material-symbols-outlined comment-count-symbol">forum</span>
                </div>
                {!article.article_img_url ? <p>{previewText}</p> : null}
                <div className="article-img-wrapper">
                    <img className="article-img" src={article.article_img_url} />
                </div>
            </div>
        </Link>
    );
}

ArticleCard.propTypes = {
    article: PropTypes.shape({
        article_id: PropTypes.number,
        article_img_url: PropTypes.string,
        author: PropTypes.string,
        comment_count: PropTypes.number,
        created_at: PropTypes.string,
        title: PropTypes.string,
        topic: PropTypes.string,
        votes: PropTypes.number,
    }),
};

export default ArticleCard;
