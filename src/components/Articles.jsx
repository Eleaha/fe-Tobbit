import { useEffect, useState } from 'react';
import allArticles from '../../api';
import ArticleCard from './ArticleCard';

function Articles() {
	const [articles, setArticles] = useState([]);

	useEffect(() => {
		allArticles.then(( {data} ) => {
			setArticles(data.articles)
		});
	}, []);

	return (
		<section>
			<ul id="article-list">
				{articles.map((article) => {
					return (<ArticleCard article={article}/>);
				})}
			</ul>
		</section>
	);
}

export default Articles;
