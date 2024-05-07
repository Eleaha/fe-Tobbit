import { Routes, Route } from 'react-router';
import './App.css';

import Articles from './components/Articles';
import Topic from './components/Topic';
import Article from './components/Article';
import Header from './components/Header';

function App() {
	return (
		<main>
			<Header />
			<Routes>
				<Route path="/" element={<Articles />} />
				<Route path="/topic" element={<Topic />} />
				<Route path="/article/:article_id/" element={<Article />} />
				<Route />
			</Routes>
		</main>
	);
}

export default App;
