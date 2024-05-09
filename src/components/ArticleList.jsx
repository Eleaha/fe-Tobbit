import ArticleCard from './ArticleCard';

function ArticleList({ articles }) {
	return (
		<ul id="article-list">
			{articles.map((article) => {
				return <ArticleCard key={article.article_id} article={article} />;
			})}
		</ul>
	);
}

export default ArticleList;
