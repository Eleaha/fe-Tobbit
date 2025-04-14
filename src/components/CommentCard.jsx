import { useContext } from 'react';
import { timestampToDate } from '../utils/utils';
import { patchVotesByCommentId } from '../utils/api-interactions';
import { UserContext } from '../contexts/User';
import PropTypes from 'prop-types';
import Votes from './Votes';
import DeleteComment from './DeleteComment';

function CommentCard({ comments, setComments, comment }) {
	const { user } = useContext(UserContext);
	return (
		<li className="comment-card card">
			<h2>{comment.author}</h2>
			<h3>{timestampToDate(comment.created_at)}</h3>
			<p>{comment.body}</p>
			<div className="comment-card-bottom">
				<Votes
					className="comment-votes"
					votes={comment.votes}
					id={comment.comment_id}
					patchFunction={patchVotesByCommentId}
				/>
				{user === comment.author && (
					<DeleteComment
						comments={comments}
						setComments={setComments}
						commentId={comment.comment_id}
					/>
				)}
			</div>
		</li>
	);
}

CommentCard.propTypes = {
	comments: PropTypes.arr,
	setComments: PropTypes.func,
	comment: PropTypes.string
}
export default CommentCard;
