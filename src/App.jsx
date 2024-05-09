import { Routes, Route, useLocation } from 'react-router';
import { useState, useLayoutEffect } from 'react';
import './App.css';
import Articles from './components/Articles';
import Topic from './components/Topic';
import Article from './components/Article';
import Header from './components/Header';
import TopicSelector from './components/TopicSelector';

function App() {
	const [viewTopics, setViewTopics] = useState(false);
	const [currentTopic, setCurrentTopic] = useState('');

	const location = useLocation();

	useLayoutEffect(() => {
		document.documentElement.scrollTo({ top: 0, left: 0, behavior: 'instant' });
	}, [location.pathname]);

	return (
		<main>
			<Header viewTopics={viewTopics} setViewTopics={setViewTopics} />
			<TopicSelector
				viewTopics={viewTopics}
				setViewTopics={setViewTopics}
				currentTopic={currentTopic}
				setCurrentTopic={setCurrentTopic}
			/>
			<Routes>
				<Route
					path="/"
					element={
						<Articles />
					}
				/>
				<Route
					path="articles"
					element={<Topic currentTopic={currentTopic} setCurrentTopic={setCurrentTopic} />}
				/>
				<Route
					path="article/:article_id"
					element={
						<Article/>
					}
				/>
				<Route />
			</Routes>
		</main>
	);
}

export default App;
