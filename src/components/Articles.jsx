import { useEffect, useState } from 'react';
import Loading from './Loading';
import { getArticles } from '../../api';
import SortArticles from './SortArticles';
import ArticleList from './ArticleList';
import { useSearchParams } from 'react-router-dom';

function Articles() {
	const [isLoading, setIsLoading] = useState(false);
	const [articles, setArticles] = useState([]);
	const [sortCategory, setSortCategory] = useState('created_at');
	const [order, setOrder] = useState('desc');

	const [searchParams, setSearchParams] = useSearchParams();

	useEffect(() => {
		setIsLoading(true);
		setSearchParams({ order, sort_category: sortCategory });
		getArticles(sortCategory, order).then(({ data }) => {
			setArticles(data.articles);
			setIsLoading(false);
		});
	}, [sortCategory, order]);

	return (
		<section className="route">
			<>
				<h1>Home</h1>
				<SortArticles setSortCategory={setSortCategory} setOrder={setOrder} />
				{isLoading ? <Loading /> : <ArticleList articles={articles} />}
			</>
		</section>
	);
}

export default Articles;
