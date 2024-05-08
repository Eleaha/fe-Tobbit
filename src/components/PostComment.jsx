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
		if (!e.target[0]) {
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
		<form className="card" onSubmit={handleSubmit}>
			<h3>New comment here</h3>
			<textarea
            disabled={isPosting}
				placeholder="your thoughts and feelings go here..."
				value={currentComment}
				onChange={handleChange}
				onBlur={handleBlur}
			></textarea>
			{!validForm && <p>You can't post a blank comment!</p>}
            {isPosting && <p>posting comment...</p>}
            {isError && <p>Something went wrong! Please try again</p>}
			<button>Submit</button>
		</form>
	);
}

export default PostComment;
