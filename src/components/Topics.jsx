import { useEffect, useState } from "react";
import { getTopics } from "../utils/api-interactions";
import TopicButton from "./TopicButton";

function Topics() {
    const [topics, setTopics] = useState([]);

    useEffect(() => {
        getTopics().then(({ data }) => {
            setTopics(data.topics);
        });
    }, []);

    return (
        <div className="topic-container">
            <TopicButton topic={"all"} />
            {topics.map((topic) => (
                <TopicButton key={topic.slug} topic={topic.slug} />
            ))}
        </div>
    );
}

export default Topics;
