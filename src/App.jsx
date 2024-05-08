import { Routes, Route, useLocation } from 'react-router';
import { useState, useLayoutEffect } from 'react';
import './App.css';
import Articles from './components/Articles';
import Topic from './components/Topic';
import Article from './components/Article';
import Header from './components/Header';

function App() {
	const [isLoading, setIsLoading] = useState(true);

	const location = useLocation();

	useLayoutEffect(() => {
		document.documentElement.scrollTo({ top: 0, left: 0, behavior: 'instant' });
	}, [location.pathname]);

	return (
		<main>
			<Header />
			<Routes>
				<Route
					path="/"
					element={
						<Articles setIsLoading={setIsLoading} isLoading={isLoading} />
					}
				/>
				<Route path="/topic" element={<Topic />} />
				<Route
					path="/article/:article_id/"
					element={
						<Article setIsLoading={setIsLoading} isLoading={isLoading} />
					}
				/>
				<Route />
			</Routes>
		</main>
	);
}

export default App;
