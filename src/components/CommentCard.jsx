import { useContext, useState } from "react";
import PropTypes from "prop-types";
import { deleteComment, patchVotesByCommentId } from "../utils/api-interactions";
import { UserContext } from "../contexts/User";
import { timestampToDate } from "../utils/utils";
import Votes from "./Votes";
import ConfirmDelete from "./ConfirmDelete";

function CommentCard({ comment }) {
    const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);

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
                {user && user.username === comment.author && (
                    <button
                        onClick={() => setShowDeleteConfirm(true)}
                        className="delete-comment-button"
                    >
                        <span className="material-symbols-outlined trash-icon">delete</span>
                    </button>
                )}
            </div>
            {showDeleteConfirm && (
                <ConfirmDelete
                    setShowDeleteConfirm={setShowDeleteConfirm}
                    itemId={comment.comment_id}
                    deleteFunc={deleteComment}
                />
            )}
        </li>
    );
}

CommentCard.propTypes = {
    comments: PropTypes.array,
    setComments: PropTypes.func,
    comment: PropTypes.object,
};
export default CommentCard;
