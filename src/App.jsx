import { Routes, Route, useLocation, Navigate } from 'react-router';
import { useLayoutEffect } from 'react';
import Articles from './components/Pages/Articles';
import Article from './components/Pages/Article';
import Header from './components/Header';
import ErrorPage from './components/Pages/ErrorPage';
import SideBar from './components/SideBar';
import './styling/App.css';

function App() {
	const location = useLocation();

	useLayoutEffect(() => {
		document.documentElement.scrollTo({ top: 0, left: 0, behavior: 'instant' });
	}, [location.pathname]);

	return (
		<>
			<Header />
			<main>
				<SideBar />
				<Routes>
					<Route path="/" element={<Navigate to="/articles" />}/>
					<Route path="/articles" element={<Articles />} />
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
