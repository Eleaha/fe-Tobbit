import { timestampToDate } from "../../utils"

function CommentCard({comment}){
    return (
        <li className="card">
            <h2>{comment.author}</h2>
            <h3>{timestampToDate(comment.created_at)}</h3>
            <p>{comment.body}</p>
            <h3>❤{comment.votes}</h3>
        </li>
    )
}
export default CommentCard
