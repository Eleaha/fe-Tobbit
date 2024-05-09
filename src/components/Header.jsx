import { Link } from 'react-router-dom';

function Header({ viewTopics, setViewTopics }) {
	function viewTopicsToggle() {
		setViewTopics(!viewTopics);
	}

	return (
		<header>
			<Link to="/" className="link">
				<button>Home</button>
			</Link>
			<Link to="/" className="link">
				<h1>Tobbit</h1>
			</Link>
			<button onClick={viewTopicsToggle}>Topics</button>
		</header>
	);
}

export default Header;
