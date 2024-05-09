import { useEffect, useState } from 'react';

function SortArticles({ setSortCategory, setOrder }) {
	const [currentSortCategory, setCurrentSortCategory] = useState('');
	const [currentOrder, setCurrentOrder] = useState('');

	useEffect(() => {
		setCurrentOrder('desc')
		setCurrentSortCategory('created_at');
	}, [])

	function handleSortChange(e) {
		setSortCategory(e.target.value);
		setCurrentSortCategory(e.target.value);
	}

	function handleClick(e) {
		if (currentOrder === 'desc') {
			setCurrentOrder('asc');
			setOrder('asc');
		} else {
			setCurrentOrder('desc');
			setOrder('desc');
		}
	}

	return (
		<section>
			<h2>Sort</h2>
			<select value={currentSortCategory} onChange={handleSortChange}>
				<option value="created_at">Date posted</option>
				<option value="comment_count">Number of comments</option>
				<option value="votes">Votes</option>
			</select>
			<button className={`order-toggle ${currentOrder}`} onClick={handleClick}>
				{currentOrder === 'desc' ? (
					<span className="material-symbols-outlined">arrow_downward</span>
				) : (
					<span className="material-symbols-outlined">arrow_upward</span>
				)}
			</button>
		</section>
	);
}

export default SortArticles;
