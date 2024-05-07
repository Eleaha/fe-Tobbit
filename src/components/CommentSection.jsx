import { useEffect, useState } from "react";
import { getCommentsByArticleID } from "../../api";
import CommentCard from "./CommentCard";

function CommentSection({articleId}){

const [comments, setComments] = useState([])

useEffect(() => {
    getCommentsByArticleID(articleId).then(({data}) => {
        setComments(data.comments)
    })
}, [])

    return (
			<section>
				<h2>Comments</h2>
                <ul>
                {comments.map((comment) => {
                    return <CommentCard comment={comment} key={comment.comment_id}/>
                })}
                </ul>
			</section>
		);
}

export default CommentSection
