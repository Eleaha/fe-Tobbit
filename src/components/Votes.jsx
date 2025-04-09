import { useState } from 'react';
import PropTypes from 'prop-types';

function Votes({ votes, id, patchFunction }) {
	const [liked, setIsLiked] = useState(false);
	const [disliked, setDisliked] = useState(false);
	const [likeFill, setLikeFill] = useState('outlined');
	const [dislikeFill, setDislikeFill] = useState('outlined');
	const [voteCount, setVoteCount] = useState(votes);
	const [error, setError] = useState(false);

	function handlePatch(votes) {
		patchFunction(votes, id).catch(() => {
			setError(true);
			setVoteCount((current) => current - votes);
		});
	}

	function handleLikeClick() {
		setError(false);
		if (liked) {
			setIsLiked(false);
			setLikeFill('outlined');
			setVoteCount((current) => current - 1);
			handlePatch(-1);
		} else {
			setIsLiked(true);
			setDisliked(false);
			setLikeFill('filled');
			setDislikeFill('outlined');
			if (disliked) {
				setVoteCount((current) => current + 2);
				handlePatch(2);
			} else {
				setVoteCount((current) => current + 1);
				handlePatch(1);
			}
		}
	}

	function handleDislikeClick() {
		setError(false);
		if (disliked) {
			setDisliked(false);
			setDislikeFill('outlined');
			setVoteCount((current) => current + 1);
			handlePatch(1);
		} else {
			setDisliked(true);
			setIsLiked(false);
			setDislikeFill('filled');
			setLikeFill('outlined');
			if (liked) {
				setVoteCount((current) => current - 2);
				handlePatch(-2);
			} else {
				setVoteCount((current) => current - 1);
				handlePatch(-1);
			}
		}
	}

	return (
		<div className="vote-wrapper">
			<h3 className="vote-count">{voteCount}</h3>
			<button className="like-or-dislike-button" onClick={handleLikeClick}>
				<span
					className={`material-symbols-outlined ${likeFill} like-or-dislike-symbol`}
				>
					favorite
				</span>
			</button>
			<button className="like-or-dislike-button" onClick={handleDislikeClick}>
				<span
					className={`material-symbols-outlined ${dislikeFill} like-or-dislike-symbol`}
				>
					heart_broken
				</span>
			</button>
			{error && <p>Something went wrong! Please try again</p>}
		</div>
	);
}

Votes.propTypes = {
	votes: PropTypes.int,
	id: PropTypes.int,
	patchFunction: PropTypes.func
}

export default Votes;
