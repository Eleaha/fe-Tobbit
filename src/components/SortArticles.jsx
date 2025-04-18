import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

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

	function handleClick() {
		if (currentOrder === 'desc') {
			setCurrentOrder('asc');
			setOrder('asc');
		} else {
			setCurrentOrder('desc');
			setOrder('desc');
		}
	}

	return (
		<section className='sort-container'>
			<h2>Sort</h2>
			<label htmlFor="order-select" />
			<select id="order-select" className='sort-dropdown' value={currentSortCategory} onChange={handleSortChange}>
				<option value="created_at">Date posted</option>
				<option value="comment_count">Number of comments</option>
				<option value="votes">Votes</option>
			</select>
			<button className={`order-toggle ${currentOrder}`} onClick={handleClick}>
				{currentOrder === 'desc' ? (
					<span className="material-symbols-outlined order-symbol">arrow_downward</span>
				) : (
					<span className="material-symbols-outlined order-symbol">arrow_upward</span>
				)}
			</button>
		</section>
	);
}

SortArticles.propTypes =
{
	setSortCategory: PropTypes.func.isRequired,
	setOrder: PropTypes.func.isRequired
}

export default SortArticles;
