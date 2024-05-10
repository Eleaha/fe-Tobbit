import { Link } from "react-router-dom";

function ErrorPage({errorMessage, errorCode}) {

	return (
		<section className="route error-page">
			<h1>Uh oh! Something's gone wrong.</h1>
            <h2>{errorMessage}</h2>
			<h1>{errorCode}</h1>
            <Link to='/' className='.link'>
                <button className="topic-button">Home</button>
            </Link>
		</section>
	)
}

export default ErrorPage;
