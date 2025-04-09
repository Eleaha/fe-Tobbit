import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function TopicButton({ setCurrentTopic, topic, setViewTopics = () => { } }) {

	function handleClick() {
		setViewTopics(false);
		console.log(topic)
		setCurrentTopic(topic);
	}

	return (
		<Link to="/articles">
			<button onClick={handleClick} className="topic-button">
				{topic}
			</button>
		</Link>
	);
}

TopicButton.propTypes = {
	setCurrentTopic: PropTypes.func.isRequired,
	topic: PropTypes.string.isRequired,
	setViewTopics: PropTypes.func
}

export default TopicButton;
