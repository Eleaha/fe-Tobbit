import PropTypes from "prop-types";
import ArticleCard from "./ArticleCard";

function ArticleList({ articles }) {
    return (
        <ul id="article-list">
            {articles.map((article) => {
                return <ArticleCard key={article.article_id} article={article} />;
            })}
        </ul>
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

export default ArticleList;
