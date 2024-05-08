import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { postComment } from '../../api';

function PostComment({setComments}) {
	const [currentComment, setCurrentComment] = useState('');
	const [validForm, setValidForm] = useState(true);
	const [isPosting, setIsPosting] = useState(false);
    const [isError, setIsError]= useState(false)

    const {article_id} = useParams()

	function handleSubmit(e) {
		e.preventDefault();
        setIsError(false)
		if (!e.target[0].value) {
			setValidForm(false);
		} else {

			const commentToPost = {
				username: 'grumpy19',
				body: e.target[0].value,
			};

            setIsPosting(true)
			postComment(commentToPost, article_id).then(({data}) => {
                setIsPosting(false)
                setCurrentComment('')
                setComments((current) => {
                    return [...current, data.comment]
                })
            }).catch((e) =>{
                console.log(e)
                setIsPosting(false)
                setIsError(true)
            })
		}
	}

	function handleChange(e) {
		setValidForm(true);
		setCurrentComment(e.target.value);
	}

    function handleBlur(){

    }

	return (
		<form className="submit-comment-card card" onSubmit={handleSubmit}>
			<h2>Add a comment</h2>
			<textarea
				disabled={isPosting}
				placeholder="Your thoughts and feelings go here..."
				value={currentComment}
				onChange={handleChange}
				onBlur={handleBlur}
			></textarea>
			<button id="submit-comment-button">Submit</button>
			{isPosting && <p>posting comment...</p>}
			{isError && <p>Something went wrong! Please try again</p>}
			{!validForm && <p>You can't post a blank comment...</p>}
		</form>
	);
}

export default PostComment;
