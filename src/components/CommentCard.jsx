import { timestampToDate } from "../../utils"

function CommentCard({comment}){
    return (
        <li className="card">
            <h2>{comment.author}</h2>
            <h3>{timestampToDate(comment.created_at)}</h3>
            <p>{comment.body}</p>
        </li>
    )
}
export default CommentCard
