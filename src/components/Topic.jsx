import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getArticles } from '../../api';
import PropTypes from 'prop-types';
import Loading from './Loading';
import ArticleList from './ArticleList';
import SortArticles from './SortArticles';
import ErrorPage from './Pages/ErrorPage';


function Topic({ currentTopic, setCurrentTopic }) {
	const [searchParams, setSearchParams] = useSearchParams();

	const [articles, setArticles] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [order, setOrder] = useState('desc');
	const [sortCategory, setSortCategory] = useState('created_at');
	const [error, setError] = useState(false);

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
		}).catch((err) => {
			console.log(err.response.data.msg)
			setError(err.response)
		})
	}, [currentTopic, searchParams, order, sortCategory]);

	const topicTitle =
		currentTopic.charAt(0).toUpperCase() + currentTopic.substring(1);

	return error ? (
		<ErrorPage errorMessage={'Topic not found'} errorCode={error.status} />
	) : (
		<section className="route">
			<h1 className="topic-title">{topicTitle}</h1>
			<SortArticles setSortCategory={setSortCategory} setOrder={setOrder} />
			{isLoading ? <Loading /> : <ArticleList articles={articles} />}
		</section>
	);
}

Topic.propTypes = {
	currentTopic: PropTypes.string.isRequired,
	setCurrentTopic: PropTypes.func.isRequired
}

export default Topic;
