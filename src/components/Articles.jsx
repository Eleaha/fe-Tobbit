import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getArticles } from '../../api';
import Loading from './Loading';
import SortArticles from './SortArticles';
import ArticleList from './ArticleList';
import ErrorPage from './ErrorPage';

function Articles() {
	const [isLoading, setIsLoading] = useState(false);
	const [articles, setArticles] = useState([]);
	const [sortCategory, setSortCategory] = useState('created_at');
	const [order, setOrder] = useState('desc');
	const [error, setError] = useState(false);

	const [searchParams, setSearchParams] = useSearchParams();

	useEffect(() => {
		setIsLoading(true);
		setSearchParams({ order, sort_category: sortCategory });
		getArticles(sortCategory, order).then(({ data }) => {
			setArticles(data.articles);
			setIsLoading(false);
		}).catch((err) => {
			setError(err.response)
		})
	}, [sortCategory, order]);

	return error? <ErrorPage errorMessage={error.data.msg} errorCode={error.status} /> : (
		<section className="route">
			<h1>Home</h1>
			<SortArticles setSortCategory={setSortCategory} setOrder={setOrder} />
			{isLoading ? <Loading /> : <ArticleList articles={articles} />}
		</section>
	);
}

export default Articles;
