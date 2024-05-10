import TopicButton from './TopicButton';
import { useState, useEffect } from 'react';
import { getTopics } from '../../api';
import { Link } from 'react-router-dom';

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
				<button onClick={(e) => setViewTopics(false)} className="topic-button">
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

export default TopicSelector;
