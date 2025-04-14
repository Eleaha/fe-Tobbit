import { useLocation, useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import "../styling/TopicButton.css";

function TopicButton({ topic }) {
    const navigate = useNavigate();
    const location = useLocation();
    const params = new URLSearchParams(location.search);

    function handleClick() {
        params.set("topic", topic);
        navigate(`/articles?${params.toString()}`, { replace: false });
    }

    return (
        <button
            onClick={handleClick}
            className={
                topic === params.get("topic") ? "topic-button selected-topic" : "topic-button"
            }
        >
            {topic}
        </button>
    );
}

TopicButton.propTypes = {
    setCurrentTopic: PropTypes.func,
    topic: PropTypes.string,
    setViewTopics: PropTypes.func,
};

export default TopicButton;
