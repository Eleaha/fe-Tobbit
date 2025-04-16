import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { formatPreviewText, timestampToDate } from "../utils/utils";
import { getArticleById, getUser } from "../utils/api-interactions";
import PropTypes from "prop-types";
import "../styling/ArticleCard.css";
import PlaceholderAvatar from "./PlaceholderAvatar";

function ArticleCard({ article }) {
    const [previewText, setPreviewText] = useState(null);
    const [authorAvatarUrl, setAuthorAvatarUrl] = useState();

    useEffect(() => {
        getArticleById(article.article_id).then(({ data }) => {
            article.article_img_url
                ? setPreviewText(formatPreviewText(data.article.body, 35))
                : setPreviewText(formatPreviewText(data.article.body, 70));
        });
        getUser(article.author).then(({ data }) => {
            setAuthorAvatarUrl(data.user.avatar_url);
        });
    });

    return (
        <Link to={`/article/${article.article_id}`} className="link">
            <div className="article-card card">
                <h1>{article.title}</h1>
                <div className="author-wrapper">
                    {authorAvatarUrl ? <img src={authorAvatarUrl} className="avatar"/> : <PlaceholderAvatar/>}
                    <h2>{article.author}</h2>
                </div>
                <h3>{timestampToDate(article.created_at)}</h3>
                <div className="article-card-votes">
                    <p>{article.votes}</p>
                    <span className="material-symbols-outlined filled like-or-dislike-symbol">
                        favorite
                    </span>
                    <p>{article.comment_count}</p>
                    <span className="material-symbols-outlined comment-count-symbol">forum</span>
                </div>
                    {article.article_img_url  && <img className="article-img" src={article.article_img_url} />}
                <p>{previewText}</p>
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
