import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getArticleById } from "../../utils/api-interactions";
import { patchVotesByArticleId } from "../../utils/api-interactions";
import { timestampToDate } from "../../utils/utils";
import Loading from "../Loading";
import ErrorPage from "./ErrorPage";
import CommentSection from "../CommentSection";
import Votes from "../Votes";
import TopicButton from "../TopicButton";
import "../../styling/Article.css";

function Article() {
    const [article, setArticle] = useState("");
    const [date, setDate] = useState("");
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(false);

    const { article_id } = useParams();

    useEffect(() => {
        getArticleById(article_id)
            .then(({ data }) => {
                setArticle(data.article);
                setDate(() => timestampToDate(data.article.created_at));
                setIsLoading(false);
            })
            .catch((err) => {
                setError(err.response);
            });
    }, [article_id]);

    return error ? (
        <ErrorPage errorMessage={"Article not found"} errorCode={error.status} />
    ) : isLoading ? (
        <Loading />
    ) : (
        <section className="route article">
            <article>
                <h1 className="article-title">{article.title}</h1>
                <h2 className="article-username">Written by {article.author}</h2>
                <h3 className="article-date">{date}</h3>
                <div className="article-votes">
                    <Votes
                        votes={article.votes}
                        id={article.article_id}
                        patchFunction={patchVotesByArticleId}
                    />
                </div>
                <TopicButton topic={article.topic} />
                <img src={article.article_img_url} className="article-img" />
                <p className="article-body">{article.body}</p>
            </article>
            <CommentSection articleId={article_id} />
        </section>
    );
}

export default Article;
