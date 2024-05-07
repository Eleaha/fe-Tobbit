import { Routes, Route } from 'react-router';
import './App.css';

import Articles from './components/Articles';
import Topic from './components/Topic';
import Article from './components/Article';
import Header from './components/Header';
import { useState } from 'react';

function App() {
	const [isLoading, setIsLoading] = useState(true);

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
