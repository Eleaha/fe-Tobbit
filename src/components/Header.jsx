import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function Header({ viewTopics, setViewTopics }) {
	function viewTopicsToggle() {
		setViewTopics(!viewTopics);
	}

	return (
		<header>
			<Link to="/articles" className="link">
				<button>Home</button>
			</Link>
			<Link to="/articles" className="link">
				<h1>Tobbit</h1>
			</Link>
			<button onClick={viewTopicsToggle}>Topics</button>
		</header>
	);
}

Header.propTypes =
{
	viewTopics: PropTypes.bool,
	setViewTopics: PropTypes.func
}


export default Header;
