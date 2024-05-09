import { Link } from 'react-router-dom';

function TopicButton({ setViewTopics, setCurrentTopic, topic }) {
    
	function handleClick() {
		setViewTopics(false);
		setCurrentTopic(topic);
	}

	return (
		<Link to="articles">
			<button onClick={handleClick} className="topic-button">
				{topic}
			</button>
		</Link>
	);
}

export default TopicButton;
