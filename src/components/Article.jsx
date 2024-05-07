import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ArticleVotes from './ArticleVotes';
import CommentSection from './CommentSection';
import { getArticleById } from '../../api';
import { timestampToDate } from '../../utils';
import Loading from './Loading';

function Article({setIsLoading, isLoading}) {
	const [article, setArticle] = useState('');
    const [date, setDate] = useState('')

	const { article_id } = useParams();

    useEffect(() => {
        setIsLoading(true)
        getArticleById(article_id).then(({ data }) => {
            setArticle(data.article);
            setDate(() => timestampToDate(data.article.created_at))
            setIsLoading(false)
        });
    }, [])

	return (
        isLoading ? (
		<div><Loading /></div>
	) : 
		<article className="route">
			<section>
				<h1 className="article-title">{article.title}</h1>
				<h2 className="article-username">{article.author}</h2>
				<h3 className="article-date">{date}</h3>
				<ArticleVotes />
			</section>
            <img src={article.article_img_url} className='article-img'/>
			<section className="article-body">
				<p>{article.body}</p>
			</section>
			<CommentSection />
		</article>
	)
}

export default Article;
