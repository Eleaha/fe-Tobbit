import { Routes, Route, useLocation } from 'react-router';
import { useState, useLayoutEffect } from 'react';
import './App.css';
import Articles from './components/Pages/Articles';
import Article from './components/Pages/Article';
import Header from './components/Header';
// import TopicSelector from './components/TopicSelector';
import ErrorPage from './components/Pages/ErrorPage';
import SideBar from './components/SideBar';

function App() {
	const [viewTopics, setViewTopics] = useState(false);

	const location = useLocation();

	useLayoutEffect(() => {
		document.documentElement.scrollTo({ top: 0, left: 0, behavior: 'instant' });
	}, [location.pathname]);

	return (
		<>
			<Header viewTopics={viewTopics} setViewTopics={setViewTopics} />
			{/* <TopicSelector
				viewTopics={viewTopics}
				setViewTopics={setViewTopics}
				currentTopic={currentTopic}
				setCurrentTopic={setCurrentTopic}
			/> */}
			<main>
				<SideBar />
				<Routes>
					<Route path="/articles" element={<Articles />} />
					{/* <Route
						path="/articles"
						element={
							<Topic
								currentTopic={currentTopic}
								setCurrentTopic={setCurrentTopic}
							/>
						}
					/> */}
					<Route
						path="/article/:article_id"
						element={<Article />}
					/>
					<Route
						path="*"
						element={
							<ErrorPage errorMessage={'Path not found'} errorCode={400} />
						}
					/>
				</Routes>
			</main>
		</>
	);
}

export default App;
