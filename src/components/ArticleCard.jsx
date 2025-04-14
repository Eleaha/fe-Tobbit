import { Link } from 'react-router-dom';
import { timestampToDate } from '../utils/utils';
import PropTypes from 'prop-types';
import "../styling/ArticleCard.css"

function ArticleCard({ article }) {
	return (
		<Link to={`/article/${article.article_id}`} className="link">
			<div className="article-card card">
				<h1>{article.title}</h1>
				<h2>{article.author}</h2>
				<h3>{timestampToDate(article.created_at)}</h3>
				<div className="article-card-votes">
					<span className="material-symbols-outlined filled like-or-dislike-symbol">
						favorite
					</span>
					<p>{article.votes}</p>
					<span>
						comments
					</span>
					<p>{article.comment_count}</p>
				</div>
				<div className="article-img-wrapper">
					<img className="article-img" src={article.article_img_url} />
					<div className="img-topic-overlay">
						<h2 className="topic-overlay">{article.topic}</h2>
					</div>
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