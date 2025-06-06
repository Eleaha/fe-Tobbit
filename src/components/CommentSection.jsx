import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { getCommentsByArticleID } from "../utils/api-interactions";
import CommentCard from "./CommentCard";
import PostComment from "./PostComment";
import "../styling/CommentSection.css"

function CommentSection({ articleId }) {
    const [comments, setComments] = useState([]);

    useEffect(() => {
        getCommentsByArticleID(articleId).then(({ data }) => {
            setComments(data.comments);
        });
    });

    return (
        <section className="comment-section">
            <h1 className="comments-title">Comments</h1>
            <PostComment setComments={setComments} />
            <ul>
                {comments.map((comment) => {
                    return <CommentCard comment={comment} key={comment.comment_id} />;
                })}
            </ul>
        </section>
    );
}

CommentSection.propTypes = {
    articleId: PropTypes.string,
};

export default CommentSection;
