import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CommentSection from './CommentSection';
import Votes from './Votes';
import Loading from './Loading';
import ErrorPage from './ErrorPage';
import { getArticleById } from '../../api';
import { timestampToDate } from '../../utils';
import { patchVotesByArticleId } from '../../api';

function Article() {
	const [article, setArticle] = useState('');
	const [date, setDate] = useState('');
	const [isLoading, setIsLoading] = useState('');
	const [error, setError] = useState(false);

	const { article_id } = useParams();

	useEffect(() => {
		setIsLoading(true);
		getArticleById(article_id)
			.then(({ data }) => {
				setArticle(data.article);
				setDate(() => timestampToDate(data.article.created_at));
				setIsLoading(false);
			})
			.catch((err) => {
				setError(err.response);
			});
	}, []);

	return error ? (
		<ErrorPage errorMessage={'Article not found'} errorCode={error.status}/>
	) : (
		<article className="route">
			{isLoading ? (
				<Loading />
			) : (
				<section>
					<h1 className="article-title">{article.title}</h1>
					<h2 className="article-username">{article.author}</h2>
					<h3 className="article-date">{date}</h3>
					<Votes
						votes={article.votes}
						id={article.article_id}
						patchFunction={patchVotesByArticleId}
					/>
					<img src={article.article_img_url} className="article-img" />
					<p className="article-body">{article.body}</p>
				</section>
			)}
			<CommentSection articleId={article_id} />
		</article>
	);
}

export default Article;
