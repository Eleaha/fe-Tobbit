import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getArticles } from '../../api';
import Loading from './Loading';
import ArticleList from './ArticleList';
import SortArticles from './SortArticles';

function Topic({ currentTopic, setCurrentTopic }) {
	const [searchParams, setSearchParams] = useSearchParams();

	const [articles, setArticles] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [order, setOrder] = useState('desc');
	const [sortCategory, setSortCategory] = useState('created_at');

	useEffect(() => {
		setIsLoading(true);
		if (searchParams.get('topic')) {
			setCurrentTopic(searchParams.get('topic'));
		}
		setSearchParams({
			topic: currentTopic,
			order,
			sort_category: sortCategory,
		});

		getArticles(sortCategory, order, currentTopic).then(({ data }) => {
			setIsLoading(false);
			setArticles(data.articles);
		});
	}, [currentTopic, searchParams, order, sortCategory]);

	const topicTitle =
		currentTopic.charAt(0).toUpperCase() + currentTopic.substring(1);

	return (
		<section className="route">
			<h1>{topicTitle}</h1>
			<SortArticles setSortCategory={setSortCategory} setOrder={setOrder} />
			{isLoading ? <Loading /> : <ArticleList articles={articles} />}
		</section>
	);
}

export default Topic;
