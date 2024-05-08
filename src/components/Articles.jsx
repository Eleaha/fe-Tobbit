import { useEffect, useState } from 'react';
import { allArticles } from '../../api';
import ArticleCard from './ArticleCard';
import Loading from './Loading';

function Articles({ setIsLoading, isLoading }) {
	
	const [articles, setArticles] = useState([]);

	useEffect(() => {
        setIsLoading(true)
		allArticles.then(({ data }) => {
			setArticles(data.articles);
			setIsLoading(false);
		});
	}, [articles]);

	return isLoading ? (
		<div><Loading /></div>
	) : (
		<section className="route">
			<ul id="article-list">
				{articles.map((article) => {
					return <ArticleCard key={article.article_id} article={article} />;
				})}
			</ul>
		</section>
	);
}

export default Articles;
