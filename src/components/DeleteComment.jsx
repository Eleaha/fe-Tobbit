import { useState } from 'react';
import { deleteComment } from '../utils/api-interactions';
import PropTypes from 'prop-types';

function DeleteComment({ comments, setComments, commentId }) {
	const [error, setError] = useState(false);
	const [showDeleteConfirmBox, setShowDeleteConfirmBox] = useState(false);

	function handleYes() {
		setError(false);
		deleteComment(commentId)
			.then(() => {
				comments.forEach((comment, i) => {
					if (comment.comment_id === commentId) {
						setComments((current) => {
							const newComments = [...current];
							newComments.splice(i, 1);
							return newComments;
						});
					}
				});
			})
			.catch(() => {
				setError(true);
			});
	}

	return (
		<div className="delete-wrapper">
			<button
				onClick={() => setShowDeleteConfirmBox(true)}
				className="delete-comment-button"
			>
				<span className="material-symbols-outlined trash-icon">delete</span>
			</button>
			{showDeleteConfirmBox && (
				<div className="confirm-delete-wrapper card">
					<p>Are you sure you want to delete your comment?</p>
					<button onClick={handleYes} className="confirm-delete-button">
						Yes
					</button>
					<button
						onClick={() => setShowDeleteConfirmBox(false)}
						className="confirm-delete-button"
					>
						No
					</button>
				</div>
			)}
			{error && <p>Something went wrong!</p>}
		</div>
	);
}

DeleteComment.propTypes = {
	comments: PropTypes.arr,
	setComments: PropTypes.func,
	commentId: PropTypes.intd
}

export default DeleteComment;
