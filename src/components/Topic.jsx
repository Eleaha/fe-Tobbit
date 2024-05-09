import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getArticlesByTopic } from '../../api';
import ArticleCard from './ArticleCard';
import Loading from './Loading';

function Topic({ currentTopic, setCurrentTopic }) {
	const [searchParams, setSearchParams] = useSearchParams();
	const [articles, setArticles] = useState([]);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		setIsLoading(true);
		if (searchParams.get('topic')) {
			setCurrentTopic(searchParams.get('topic'));
		} else {
			setSearchParams({ topic: currentTopic });
		}

		getArticlesByTopic(currentTopic).then(({ data }) => {
			setIsLoading(false);
			setArticles(data.articles);
		});
	}, [currentTopic, searchParams]);

	const topicTitle =
		currentTopic.charAt(0).toUpperCase() + currentTopic.substring(1);

	return isLoading ? (
		<Loading />
	) : (
		<section className="route">
			<h1>{topicTitle}</h1>
			<ul id="article-list">
				{articles.map((article) => {
					return <ArticleCard key={article.article_id} article={article} />;
				})}
			</ul>
		</section>
	);
}

export default Topic;
