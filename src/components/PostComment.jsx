import { useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { postComment } from "../utils/api-interactions";
import { UserContext } from "../contexts/User";
import PropTypes from "prop-types";

function PostComment({ setComments }) {
    const [currentComment, setCurrentComment] = useState("");
    const [validForm, setValidForm] = useState(true);
    const [isPosting, setIsPosting] = useState(false);
    const [isError, setIsError] = useState(false);

    const { user } = useContext(UserContext);

    const { article_id } = useParams();

    function handleSubmit(e) {
        e.preventDefault();
        setIsError(false);
        if (!e.target[0].value) {
            setValidForm(false);
        } else {
            const commentToPost = {
                username: user.username,
                body: e.target[0].value,
            };

            setIsPosting(true);
            postComment(commentToPost, article_id)
                .then(({ data }) => {
                    setIsPosting(false);
                    setCurrentComment("");
                    setComments((current) => {
                        return [data.comment, ...current];
                    });
                })
                .catch((e) => {
                    console.log(e);
                    setIsPosting(false);
                    setIsError(true);
                });
        }
    }

    function handleChange(e) {
        setValidForm(true);
        setCurrentComment(e.target.value);
    }

    return (
        <form className="submit-comment-card card" onSubmit={handleSubmit}>
            <h2>Add a comment</h2>
            <textarea
                className="comment-input"
                disabled={isPosting}
                placeholder="Your thoughts and feelings go here..."
                value={currentComment}
                onChange={handleChange}
            ></textarea>
            <button id="submit-comment-button" className="styled-button">
                Submit
            </button>
            {isPosting && <p>posting comment...</p>}
            {isError && <p>Something went wrong! Please try again</p>}
            {!validForm && <p>You can&apos;t post a blank comment...</p>}
        </form>
    );
}

PostComment.propTypes = {
    setComments: PropTypes.func.isRequired,
};

export default PostComment;
