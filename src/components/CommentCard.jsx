import { timestampToDate } from "../../utils"
import { patchVotesByCommentId } from "../../api"
import Votes from "./Votes"

function CommentCard({comment}){
    return (
        <li className="card">
            <h2>{comment.author}</h2>
            <h3>{timestampToDate(comment.created_at)}</h3>
            <p>{comment.body}</p>
            <Votes className="comment-votes" votes={comment.votes} id={comment.comment_id} patchFunction={patchVotesByCommentId}/>
        </li>
    )
}
export default CommentCard
