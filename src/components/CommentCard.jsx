import { useContext } from 'react';
import { timestampToDate } from '../../utils';
import { patchVotesByCommentId } from '../../api';
import { UserContext } from '../contexts/User';
import Votes from './Votes';
import DeleteComment from './DeleteComment';

function CommentCard({ comments, setComments, comment }) {
	const { user } = useContext(UserContext);
	return (
		<li className="card">
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
export default CommentCard;
