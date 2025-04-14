import TopicButton from '../TopicButton';
import { useState, useEffect } from 'react';
import { getTopics } from '../../../api';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function TopicSelector({
	viewTopics,
	setViewTopics,
	currentTopic,
	setCurrentTopic,
}) {
	const [topics, setTopics] = useState([]);

	useEffect(() => {
		getTopics().then(({ data }) => {
			setTopics(data.topics);
		});
	}, []);

	return (
		<nav className={`topic-nav view-${viewTopics.toString()}`}>
			<Link to="/">
				<button onClick={() => setViewTopics(false)} className="topic-button">
					All
				</button>
			</Link>
			{topics.map((topic) => (
				<TopicButton
					key={topic.slug}
					setViewTopics={setViewTopics}
					setCurrentTopic={setCurrentTopic}
					currentTopic={currentTopic}
					topic={topic.slug}
				/>
			))}
		</nav>
	);
}
TopicSelector.propTypes = {
	viewTopics: PropTypes.bool.isRequired,
	setViewTopics: PropTypes.func.isRequired,
	currentTopic: PropTypes.string.isRequired,
	setCurrentTopic: PropTypes.func.isRequired
}

export default TopicSelector;
