import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { patchVotesByArticleId } from '../../api';

function ArticleVotes({ votes }) {

	const [liked, setIsLiked] = useState(false);
	const [disliked, setDisliked] = useState(false);
	const [likeFill, setLikeFill] = useState('outlined');
	const [dislikeFill, setDislikeFill] = useState('outlined');
	const [voteCount, setVoteCount] = useState(votes);

    const { article_id } = useParams();

	function handlePatchVotes(votes) {
		patchVotesByArticleId(votes, article_id);
	}
    
	function handleLikeClick() {

		if (liked) {
			setIsLiked(false);
			setLikeFill('outlined');
			setVoteCount((current) => current - 1);
			handlePatchVotes(-1);
		} else {
			setIsLiked(true);
			setDisliked(false);
			setLikeFill('filled');
			setDislikeFill('outlined');
			if (disliked) {
				setVoteCount((current) => current + 2);
				handlePatchVotes(2);
			} else {
				setVoteCount((current) => current + 1);
				handlePatchVotes(1);
			}
		}
	}
	function handleDislikeClick() {
		if (disliked) {
			setDisliked(false);
			setDislikeFill('outlined');
			setVoteCount((current) => current + 1);
			handlePatchVotes(1);
		} else {
			setDisliked(true);
			setIsLiked(false);
			setDislikeFill('filled');
			setLikeFill('outlined');
			if (liked) {
				setVoteCount((current) => current - 2);
				handlePatchVotes(-2);
			} else {
				setVoteCount((current) => current - 1);
				handlePatchVotes(-1);
			}
		}
	}

	return (
		<div className="vote-wrapper">
			<h3>{voteCount}</h3>
			<button onClick={handleLikeClick}>
				<span className={`material-symbols-outlined ${likeFill}`}>
					favorite
				</span>
			</button>
			<button onClick={handleDislikeClick}>
				<span className={`material-symbols-outlined ${dislikeFill}`}>
					heart_broken
				</span>
			</button>
		</div>
	);
}

export default ArticleVotes;
