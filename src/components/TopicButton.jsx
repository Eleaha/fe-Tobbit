import { Link } from 'react-router-dom';

function TopicButton({ setCurrentTopic, topic, setViewTopics = () =>{} }) {

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

export default TopicButton;
