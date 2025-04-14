import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { getArticles } from "../../../api";
import PropTypes from "prop-types";
import Loading from "../Loading";
import ArticleList from "../ArticleList";
import ErrorPage from "./ErrorPage";
import "../../styling/Articles.css";

function Articles() {
    const [isLoading, setIsLoading] = useState(false);
    const [articles, setArticles] = useState([]);
    const [error, setError] = useState(false);

    const [searchParams] = useSearchParams();

    useEffect(() => {
        setIsLoading(true);
        const topic = searchParams.get("topic");
        const sortCategory = searchParams.get("sort_category");
        const order = searchParams.get("order");

        const articleTopic = topic === "all" ? null : topic;

        getArticles(sortCategory, order, articleTopic)
            .then(({ data }) => {
                setArticles(data.articles);
                setIsLoading(false);
            })
            .catch((err) => {
                setError(err.response);
            });
    }, [searchParams]);

    return error ? (
        <ErrorPage errorMessage={error.data.msg} errorCode={error.status} />
    ) : (
        <section className="route">
            {isLoading ? <Loading /> : <ArticleList articles={articles} />}
        </section>
    );
}

ArticleList.propTypes = {
    articles: PropTypes.arrayOf(
        PropTypes.shape({
            article_id: PropTypes.number,
            title: PropTypes.string,
            topic: PropTypes.string,
            author: PropTypes.string,
            body: PropTypes.string,
            votes: PropTypes.number,
            article_img_url: PropTypes.string,
            created_at: PropTypes.string,
        })
    ),
};

export default Articles;
