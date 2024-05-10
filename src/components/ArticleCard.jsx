import { Link } from 'react-router-dom';
import { timestampToDate } from '../../utils';

function ArticleCard({ article }) {
	return (
		<Link to={`/article/${article.article_id}`} className="link">
			<li className="article-card card">
				<h1>{article.title}</h1>
				<h2>{article.author}</h2>
				<h3>{timestampToDate(article.created_at)}</h3>
				<div className="article-card-votes">
					<span className="material-symbols-outlined filled like-or-dislike-symbol">
						favorite
					</span>
					<p>{article.votes}</p>
				</div>
				<div className="article-img-wrapper">
					<img className="article-img" src={article.article_img_url} />
					<div className="img-topic-overlay">
						<h2 className="topic-overlay">{article.topic}</h2>
					</div>
				</div>
			</li>
		</Link>
	);
}

export default ArticleCard;
