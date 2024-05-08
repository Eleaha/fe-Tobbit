import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CommentSection from './CommentSection';
import { getArticleById } from '../../api';
import { timestampToDate } from '../../utils';
import Loading from './Loading';
import Votes from './Votes';
import { patchVotesByArticleId } from '../../api';

function Article({ setIsLoading, isLoading }) {
	const [article, setArticle] = useState('');
	const [date, setDate] = useState('');

	const { article_id } = useParams();

	useEffect(() => {
		setIsLoading(true);
		getArticleById(article_id).then(({ data }) => {
			setArticle(data.article);
			setDate(() => timestampToDate(data.article.created_at));
			setIsLoading(false);
		});
	}, []);

	return isLoading ? (
		<div>
			<Loading />
		</div>
	) : (
		<article className="route">
			<section>
				<h1 className="article-title">{article.title}</h1>
				<h2 className="article-username">{article.author}</h2>
				<h3 className="article-date">{date}</h3>
				<Votes
					votes={article.votes}
					id={article.article_id}
					patchFunction={patchVotesByArticleId}
				/>
				{/* <ArticleVotes votes={article.votes}/> */}
			</section>
			<img src={article.article_img_url} className="article-img" />
			<section className="article-body">
				<p>{article.body}</p>
			</section>
			<CommentSection articleId={article_id} />
		</article>
	);
}

export default Article;
